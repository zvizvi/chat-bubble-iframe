
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ChatIframe from "./ChatIframe";

const ChatBubbleDemo = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <Card className="p-6 md:p-8 rounded-lg shadow-sm bg-white border border-gray-100">
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Try it Yourself</h2>
        <p className="text-gray-600 text-center mb-8 max-w-xl">
          Click the button below to see how the chat bubble works. It opens an iframe that simulates a chat interface.
        </p>
        
        <div className="relative w-full max-w-2xl bg-gray-50 rounded-lg p-4 md:p-8 border border-gray-200 min-h-[300px] flex items-center justify-center">
          {/* Demo area that simulates a website */}
          <Button 
            className="relative transition-all duration-300 transform hover:scale-105"
            onClick={() => setShowChat(!showChat)}
          >
            {showChat ? "Close Chat" : "Open Chat"}
          </Button>
          
          {showChat && (
            <div className="absolute bottom-4 right-4 w-80 h-96 z-10">
              <ChatIframe />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbleDemo;
