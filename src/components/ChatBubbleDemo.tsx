
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ChatIframe from "./ChatIframe";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

const ChatBubbleDemo = () => {
  const [showChat, setShowChat] = useState(false);
  const [buttonPosition, setButtonPosition] = useState("bottom-right");
  const [buttonColor, setButtonColor] = useState("#3b82f6");
  const [chatUrl, setChatUrl] = useState("https://your-chat-url.com/");

  // Get position styles based on buttonPosition
  const getPositionStyles = (position) => {
    switch (position) {
      case "bottom-left":
        return { bottom: "20px", left: "20px" };
      case "top-right":
        return { top: "20px", right: "20px" };
      case "top-left":
        return { top: "20px", left: "20px" };
      case "bottom-right":
      default:
        return { bottom: "20px", right: "20px" };
    }
  };

  // Get chat container position based on button position
  const getChatContainerPosition = (position) => {
    switch (position) {
      case "bottom-left":
        return { bottom: "100px", left: "20px" };
      case "top-right":
        return { top: "100px", right: "20px" };
      case "top-left":
        return { top: "100px", left: "20px" };
      case "bottom-right":
      default:
        return { bottom: "100px", right: "20px" };
    }
  };

  const buttonPositionStyle = getPositionStyles(buttonPosition);
  const chatPositionStyle = getChatContainerPosition(buttonPosition);

  // Color options
  const colorOptions = [
    { value: "#3b82f6", label: "Blue", bgClass: "bg-blue-500" },
    { value: "#8B5CF6", label: "Purple", bgClass: "bg-purple-500" },
    { value: "#F97316", label: "Orange", bgClass: "bg-orange-500" },
    { value: "#10B981", label: "Green", bgClass: "bg-green-500" },
    { value: "#F43F5E", label: "Red", bgClass: "bg-red-500" },
  ];

  return (
    <Card className="p-6 md:p-8 rounded-lg shadow-sm bg-white border border-gray-100">
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Try it Yourself</h2>
        <p className="text-gray-600 text-center mb-6 max-w-xl">
          Customize the chat bubble and see how it works. You can adjust the position and color of the button, then click it to open the chat iframe.
        </p>
        
        <div className="w-full max-w-3xl mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Position</h3>
              <RadioGroup 
                value={buttonPosition} 
                onValueChange={setButtonPosition}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bottom-right" id="bottom-right" />
                  <Label htmlFor="bottom-right">Bottom Right</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bottom-left" id="bottom-left" />
                  <Label htmlFor="bottom-left">Bottom Left</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="top-right" id="top-right" />
                  <Label htmlFor="top-right">Top Right</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="top-left" id="top-left" />
                  <Label htmlFor="top-left">Top Left</Label>
                </div>
              </RadioGroup>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium mb-3">Chat URL</h3>
                <div className="space-y-2">
                  <Label htmlFor="chat-url">URL to open in iframe</Label>
                  <Input 
                    id="chat-url" 
                    value={chatUrl} 
                    onChange={(e) => setChatUrl(e.target.value)}
                    placeholder="https://your-chat-url.com/"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Color</h3>
              <RadioGroup 
                value={buttonColor} 
                onValueChange={setButtonColor}
                className="flex flex-col space-y-3"
              >
                {colorOptions.map((color) => (
                  <div key={color.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={color.value} id={color.value} />
                    <div className={`w-6 h-6 rounded-full ${color.bgClass} mr-2`}></div>
                    <Label htmlFor={color.value}>{color.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
        
        <div className="relative w-full max-w-2xl bg-gray-50 rounded-lg p-4 md:p-8 border border-gray-200 min-h-[400px]">
          {/* Demo area that simulates a website */}
          <div className="p-4 text-center text-gray-500 mb-8">
            <p>This is a simulated webpage environment</p>
          </div>
          
          <button
            style={{
              position: "absolute",
              ...buttonPositionStyle,
              backgroundColor: buttonColor,
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              cursor: "pointer",
              color: "white",
              transition: "all 0.3s ease",
            }}
            onClick={() => setShowChat(!showChat)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21C10.8976 21 9.82578 20.8204 8.82353 20.4857C8.74178 20.4594 8.65567 20.4472 8.57143 20.4472C8.4881 20.4472 8.40477 20.4594 8.32353 20.4857L3.58333 21.9857C3.22241 22.093 2.83138 21.8562 2.83333 21.4764V16.4671C2.83333 16.3682 2.80277 16.2713 2.74609 16.1868C1.65389 14.5489 1 12.576 1 10.5C1 5.52944 5.02944 1.5 10 1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 7.5V8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 7.5V8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 7.5V8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          {showChat && (
            <div
              style={{
                position: "absolute",
                ...chatPositionStyle,
                width: "280px",
                height: "320px",
                zIndex: 10,
              }}
            >
              <ChatIframe url={chatUrl} />
            </div>
          )}
        </div>

        <div className="mt-6 w-full max-w-2xl">
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm">
            <h4 className="font-semibold mb-2">Current Configuration:</h4>
            <pre className="bg-gray-800 text-gray-100 p-2 rounded-md overflow-x-auto">
{`window.chatBubbleConfig = {
  chatUrl: '${chatUrl}',
  buttonColor: '${buttonColor}',
  buttonPosition: '${buttonPosition}',
  buttonSize: '60px',
  chatWidth: '320px',
  chatHeight: '400px',
};`}
            </pre>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbleDemo;
