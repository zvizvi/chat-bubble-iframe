
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ChatIframe = () => {
  const iframeRef = useRef<HTMLDivElement>(null);

  // Simulate chat messages
  const messages = [
    { id: 1, sender: "bot", text: "Hello! How can I help you today?" },
    { id: 2, sender: "user", text: "I have a question about your product." },
    { id: 3, sender: "bot", text: "Sure, I'd be happy to help! What would you like to know?" },
  ];

  return (
    <Card className="h-full flex flex-col overflow-hidden shadow-lg border border-gray-200 animate-fade-in">
      <div className="p-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <div className="font-medium">Chat Support</div>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <X className="h-4 w-4" />
        </Button>
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
      
      <div className="p-3 border-t border-gray-200 bg-white">
        <div className="flex">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button className="rounded-l-none">Send</Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatIframe;
