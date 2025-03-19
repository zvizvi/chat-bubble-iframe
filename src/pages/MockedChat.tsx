
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { SendHorizontal, ArrowUpFromLine, ArrowDownToLine, XCircle } from "lucide-react";

const MockedChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! How can I help you today?" },
    { id: 2, sender: "user", text: "I have a question about your product." },
    { id: 3, sender: "bot", text: "Sure, I'd be happy to help! What would you like to know?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [configData, setConfigData] = useState<any>(null);

  const scrollToEnd = () => {
    requestAnimationFrame(() => {
      const chatContainer = document.getElementById("chat-container");
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight + 1000;
      }
    });
  };

  useEffect(() => {
    // Listen for messages from the parent window
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'chat-bubble-config') {
        setConfigData(event.data.config);
      }
      
      if (event.data && event.data.type === 'chat-bubble-opened') {
        // Add a system message when chat is opened
        setMessages(prev => [
          ...prev, 
          { id: Date.now(), sender: "system", text: "Chat window opened" }
        ]);
        scrollToEnd();
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Request config data when component mounts
    window.parent.postMessage({ type: 'get-config' }, '*');

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      setMessages([
        ...messages,
        { id: Date.now(), sender: "user", text: inputValue }
      ]);

      // Clear input
      setInputValue("");
      scrollToEnd();

      // Simulate bot response after 1 second
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { id: Date.now() + 1, sender: "bot", text: "Thank you for your message! Our team will get back to you soon." }
        ]);
        scrollToEnd();
      }, 1000);
    }

    document.getElementById("chat-input")?.focus();
  };

  const toggleWidget = () => {
    window.parent.postMessage({ type: 'toggle-chat' }, '*');
  };

  const closeWidget = () => {
    window.parent.postMessage({ type: 'close-chat' }, '*');
  };

  const setWidgetSize = (width: string, height: string) => {
    window.parent.postMessage({ 
      type: 'resize-widget',
      width,
      height
    }, '*');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-4 overflow-y-auto bg-white scroll-smooth" id="chat-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-3 ${
              message.sender === "user" ? "text-right" : 
              message.sender === "system" ? "text-center" : "text-left"
            }`}
          >
            <div
              className={`inline-block px-3 py-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-sm"
                  : message.sender === "system"
                  ? "bg-gray-200 text-gray-600 text-xs py-1 px-2"
                  : "bg-gray-100 text-gray-800 rounded-bl-sm"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {configData && (
          <div className="mt-8 p-3 border border-gray-200 rounded-md bg-gray-50 text-xs">
            <div className="font-semibold mb-2">Current Widget Configuration:</div>
            <pre className="whitespace-pre-wrap break-words">
              {JSON.stringify(configData, null, 2)}
            </pre>
          </div>
        )}

        <div className="mt-6 p-3 border border-gray-200 rounded-md">
          <h3 className="text-sm font-semibold mb-2">Control Widget:</h3>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" onClick={toggleWidget} className="text-xs">
              Toggle Widget
            </Button>
            <Button size="sm" variant="outline" onClick={closeWidget} className="text-xs">
              <XCircle className="h-3 w-3 mr-1" /> Close Widget
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => setWidgetSize('400px', '500px')} 
              className="text-xs"
            >
              <ArrowUpFromLine className="h-3 w-3 mr-1" /> Make Larger
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => setWidgetSize('280px', '350px')} 
              className="text-xs"
            >
              <ArrowDownToLine className="h-3 w-3 mr-1" /> Make Smaller
            </Button>
          </div>
        </div>
      </div>

      <div className="py-3 px-4 border-t border-gray-200 bg-white">
        <div className="flex">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            autoFocus
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 min-w-0 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="chat-input"
          />
          <Button
            className="bg-blue-500 text-white px-4 py-2 rounded-none rounded-r-md hover:bg-blue-600"
            onClick={handleSendMessage}
          >
            Send
            <SendHorizontal className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MockedChat;
