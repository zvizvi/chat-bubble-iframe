
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import PositionOptions from "./chat-bubble/PositionOptions";
import ColorOptions from "./chat-bubble/ColorOptions";
import FrameSizeOptions from "./chat-bubble/FrameSizeOptions";
import FrameConfigInputs from "./chat-bubble/FrameConfigInputs";
import ChatBubblePreview from "./chat-bubble/ChatBubblePreview";
import ConfigDisplay from "@/components/chat-bubble/ConfigDisplay";
import HeaderOptions from "./chat-bubble/HeaderOptions";

interface ChatBubbleDemoProps {
  publicChatUrl?: string;
}

const ChatBubbleDemo = ({ publicChatUrl }: ChatBubbleDemoProps) => {
  const [showFrame, setShowFrame] = useState(false);
  const [buttonPosition, setButtonPosition] = useState("bottom-right");
  const [buttonBackground, setButtonBackground] = useState("#3b82f6");
  const [buttonColor, setButtonColor] = useState("#ffffff");
  const [frameUrl, setFrameUrl] = useState(publicChatUrl || "https://your-iframe-url.com/");
  const [frameWidth, setFrameWidth] = useState("320");
  const [frameHeight, setFrameHeight] = useState("400");
  const [frameTitle, setFrameTitle] = useState("Chat Support");
  const [buttonIcon, setButtonIcon] = useState("message-circle");
  const [openButtonIcon, setOpenButtonIcon] = useState("close");
  const [hideHeader, setHideHeader] = useState(false);
  const [headerBackground, setHeaderBackground] = useState("#f9fafb");
  const [headerColor, setHeaderColor] = useState("#000000");
  const [persistFrame, setPersistFrame] = useState(false);
  
  // When publicChatUrl changes, update the frameUrl
  useEffect(() => {
    if (publicChatUrl) {
      setFrameUrl(publicChatUrl);
    }
  }, [publicChatUrl]);

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
            buttonIcon={buttonIcon}
            setButtonIcon={setButtonIcon}
            openButtonIcon={openButtonIcon}
            setOpenButtonIcon={setOpenButtonIcon}
          />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <PositionOptions
              buttonPosition={buttonPosition}
              setButtonPosition={setButtonPosition}
            />

            <div className="space-y-9">
              <ColorOptions
                buttonBackground={buttonBackground}
                setButtonBackground={setButtonBackground}
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

          <HeaderOptions
            hideHeader={hideHeader}
            setHideHeader={setHideHeader}
            headerBackground={headerBackground}
            setHeaderBackground={setHeaderBackground}
            headerColor={headerColor}
            setHeaderColor={setHeaderColor}
            buttonColor={buttonColor}
            setButtonColor={setButtonColor}
            persistFrame={persistFrame}
            setPersistFrame={setPersistFrame}
          />
        </div>

        <ChatBubblePreview
          showFrame={showFrame}
          setShowFrame={setShowFrame}
          buttonPosition={buttonPosition}
          buttonBackground={buttonBackground}
          buttonColor={buttonColor}
          frameUrl={frameUrl}
          frameWidth={frameWidth}
          frameHeight={frameHeight}
          frameTitle={frameTitle}
          buttonIcon={buttonIcon}
          openButtonIcon={openButtonIcon}
          hideHeader={hideHeader}
          headerBackground={headerBackground}
          headerColor={headerColor}
          persistFrame={persistFrame}
        />

        <div className="mt-6 w-full max-w-2xl">
          <ConfigDisplay
            frameUrl={frameUrl}
            frameTitle={frameTitle}
            buttonBackground={buttonBackground}
            buttonPosition={buttonPosition}
            frameWidth={frameWidth}
            frameHeight={frameHeight}
            buttonIcon={buttonIcon}
            openButtonIcon={openButtonIcon}
            hideHeader={hideHeader}
            headerBackground={headerBackground}
            headerColor={headerColor}
            buttonColor={buttonColor}
            persistFrame={persistFrame}
          />
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbleDemo;
