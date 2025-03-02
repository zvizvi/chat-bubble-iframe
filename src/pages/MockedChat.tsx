
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MockedChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! How can I help you today?" },
    { id: 2, sender: "user", text: "I have a question about your product." },
    { id: 3, sender: "bot", text: "Sure, I'd be happy to help! What would you like to know?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      setMessages([
        ...messages, 
        { id: Date.now(), sender: "user", text: inputValue }
      ]);
      
      // Clear input
      setInputValue("");
      
      // Simulate bot response after 1 second
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { id: Date.now() + 1, sender: "bot", text: "Thank you for your message! Our team will get back to you soon." }
        ]);
      }, 1000);
    }
  };

  // Get query parameters for title
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title") || "Chat Support";

  return (
    <div className="flex flex-col h-screen">
      <div className="p-3 bg-gray-50 border-b border-gray-200">
        <div className="font-medium">{title}</div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-white">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-3 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block px-3 py-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="py-3 px-4 border-t border-gray-200 bg-white">
        <div className="flex">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 min-w-0 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button 
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MockedChat;
