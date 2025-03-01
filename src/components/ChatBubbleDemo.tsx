
import { useState } from "react";
import { Card } from "@/components/ui/card";
import PositionOptions from "./chat-bubble/PositionOptions";
import ColorOptions from "./chat-bubble/ColorOptions";
import FrameSizeOptions from "./chat-bubble/FrameSizeOptions";
import FrameConfigInputs from "./chat-bubble/FrameConfigInputs";
import ChatBubblePreview from "./chat-bubble/ChatBubblePreview";
import ConfigDisplay from "./chat-bubble/ConfigDisplay";

const ChatBubbleDemo = () => {
  const [showFrame, setShowFrame] = useState(false);
  const [buttonPosition, setButtonPosition] = useState("bottom-right");
  const [buttonColor, setButtonColor] = useState("#3b82f6");
  const [frameUrl, setFrameUrl] = useState("https://your-iframe-url.com/");
  const [frameWidth, setFrameWidth] = useState("300");
  const [frameHeight, setFrameHeight] = useState("360");
  const [frameTitle, setFrameTitle] = useState("Chat Support");

  return (
    <Card className="p-6 md:p-8 rounded-lg shadow-sm bg-white border border-gray-100">
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Try it Yourself</h2>
        <p className="text-gray-600 text-center mb-6 max-w-xl">
          Customize the chat bubble and see how it works. You can adjust the position and color of the button, then click it to open the chat iframe.
        </p>

        <div className="w-full max-w-3xl mb-12">
          <FrameConfigInputs 
            frameUrl={frameUrl}
            setFrameUrl={setFrameUrl}
            frameTitle={frameTitle}
            setFrameTitle={setFrameTitle}
          />

          <div className="grid md:grid-cols-2 gap-8">
            <PositionOptions 
              buttonPosition={buttonPosition}
              setButtonPosition={setButtonPosition}
            />

            <div className="space-y-9">
              <ColorOptions 
                buttonColor={buttonColor}
                setButtonColor={setButtonColor}
              />

              <FrameSizeOptions 
                frameWidth={frameWidth}
                setFrameWidth={setFrameWidth}
                frameHeight={frameHeight}
                setFrameHeight={setFrameHeight}
              />
            </div>
          </div>
        </div>

        <ChatBubblePreview 
          showFrame={showFrame}
          setShowFrame={setShowFrame}
          buttonPosition={buttonPosition}
          buttonColor={buttonColor}
          frameUrl={frameUrl}
          frameWidth={frameWidth}
          frameHeight={frameHeight}
          frameTitle={frameTitle}
        />

        <div className="mt-6 w-full max-w-2xl">
          <ConfigDisplay 
            frameUrl={frameUrl}
            frameTitle={frameTitle}
            buttonColor={buttonColor}
            buttonPosition={buttonPosition}
            frameWidth={frameWidth}
            frameHeight={frameHeight}
          />
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbleDemo;
