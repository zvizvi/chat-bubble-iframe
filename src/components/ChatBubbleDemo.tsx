import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import PositionOptions from "./chat-bubble/PositionOptions";
import ColorOptions from "./chat-bubble/ColorOptions";
import FrameConfigInputs from "./chat-bubble/FrameConfigInputs";
import ChatBubblePreview from "./chat-bubble/ChatBubblePreview";
import ConfigDisplay from "@/components/chat-bubble/ConfigDisplay";

interface ChatBubbleDemoProps {
  publicChatUrl?: string;
}

const ChatBubbleDemo = ({ publicChatUrl }: ChatBubbleDemoProps) => {
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
              />

              <div className="space-y-4">
                <h3 className="text-md font-medium mb-4">Chat Window Size</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="frame-width" className="font-medium">Width (px)</Label>
                      <Input
                        id="frame-width"
                        type="number"
                        value={frameWidth}
                        onChange={(e) => setFrameWidth(e.target.value)}
                        className="w-24"
                        min="200"
                        max="500"
                      />
                    </div>
                    <Slider
                      value={[Number(frameWidth)]}
                      min={200}
                      max={500}
                      step={10}
                      onValueChange={(value) => setFrameWidth(value[0].toString())}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="frame-height">Height (px)</Label>
                      <Input
                        id="frame-height"
                        type="number"
                        value={frameHeight}
                        onChange={(e) => setFrameHeight(e.target.value)}
                        className="w-24"
                        min="200"
                        max="600"
                      />
                    </div>
                    <Slider
                      value={[Number(frameHeight)]}
                      min={200}
                      max={600}
                      step={10}
                      onValueChange={(value) => setFrameHeight(value[0].toString())}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg border">
            <h3 className="text-md font-medium mb-4">Advanced Options</h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="hide-header" className="font-medium">Hide Header</Label>
                  <p className="text-sm text-gray-500">Remove the title bar from the chat window</p>
                </div>
                <Switch
                  id="hide-header"
                  checked={hideHeader}
                  onCheckedChange={setHideHeader}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="persist-frame" className="font-medium">Keep Widget Alive</Label>
                  <p className="text-sm text-gray-500">Maintain iframe when chat is closed</p>
                </div>
                <Switch
                  id="persist-frame"
                  checked={persistFrame}
                  onCheckedChange={setPersistFrame}
                />
              </div>
            </div>
          </div>
        </div>

        <ChatBubblePreview
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

        <div className="mt-6 w-full max-w-3xl">
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
