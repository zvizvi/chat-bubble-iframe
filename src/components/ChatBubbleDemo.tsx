
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ChatIframe from "./ChatIframe";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Highlight, themes } from "prism-react-renderer";

const ChatBubbleDemo = () => {
  const [showFrame, setShowFrame] = useState(false);
  const [buttonPosition, setButtonPosition] = useState("bottom-right");
  const [buttonColor, setButtonColor] = useState("#3b82f6");
  const [frameUrl, setFrameUrl] = useState("https://your-iframe-url.com/");

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

  // Color options with hover colors
  const colorOptions = [
    { value: "#3b82f6", label: "Blue", bgClass: "bg-blue-500", hoverClass: "hover:ring-blue-300" },
    { value: "#8B5CF6", label: "Purple", bgClass: "bg-purple-500", hoverClass: "hover:ring-purple-300" },
    { value: "#F97316", label: "Orange", bgClass: "bg-orange-500", hoverClass: "hover:ring-orange-300" },
    { value: "#10B981", label: "Green", bgClass: "bg-green-500", hoverClass: "hover:ring-green-300" },
    { value: "#F43F5E", label: "Red", bgClass: "bg-red-500", hoverClass: "hover:ring-red-300" },
    { value: "custom", label: "Custom", bgClass: "", hoverClass: "hover:ring-gray-300" },
  ];

  const [customColor, setCustomColor] = useState("#000000");

  // Position options with SVG icons
  const positionOptions = [
    {
      value: "bottom-right",
      label: "Bottom Right",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
          <path d="M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13" y="13" width="6" height="4" rx="1" fill="currentColor" />
        </svg>
      )
    },
    {
      value: "bottom-left",
      label: "Bottom Left",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
          <path d="M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z" stroke="currentColor" strokeWidth="1.5" />
          <rect x="5" y="13" width="6" height="4" rx="1" fill="currentColor" />
        </svg>
      )
    },
    {
      value: "top-right",
      label: "Top Right",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
          <path d="M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13" y="7" width="6" height="4" rx="1" fill="currentColor" />
        </svg>
      )
    },
    {
      value: "top-left",
      label: "Top Left",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
          <path d="M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z" stroke="currentColor" strokeWidth="1.5" />
          <rect x="5" y="7" width="6" height="4" rx="1" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <Card className="p-6 md:p-8 rounded-lg shadow-sm bg-white border border-gray-100">
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Try it Yourself</h2>
        <p className="text-gray-600 text-center mb-6 max-w-xl">
          Customize the chat bubble and see how it works. You can adjust the position and color of the button, then click it to open the chat iframe.
        </p>

        <div className="w-full max-w-3xl mb-8">
          <div className="py-8">
            <h3 className="text-lg font-medium mb-3">Frame URL</h3>
            <div className="space-y-2">
              <Label htmlFor="chat-url">URL to open in iframe</Label>
              <Input
                id="chat-url"
                value={frameUrl}
                onChange={(e) => setFrameUrl(e.target.value)}
                placeholder="https://your-iframe-url.com/"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Position</h3>
              <RadioGroup
                value={buttonPosition}
                onValueChange={setButtonPosition}
                className="grid grid-cols-2 gap-4"
              >
                {positionOptions.map((position) => (
                  <div
                    key={position.value}
                    className={`relative p-4 border rounded-lg transition-all duration-200 ${buttonPosition === position.value ? 'border-gray-400 bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <RadioGroupItem
                      value={position.value}
                      id={position.value}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={position.value}
                      className="flex flex-col items-center cursor-pointer space-y-2"
                    >
                      <div className="text-gray-600">{position.icon}</div>
                      <span className="text-sm font-medium">{position.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Color</h3>
              <RadioGroup
                value={Object.values(colorOptions).some(opt => opt.value !== 'custom' && opt.value === buttonColor) ? buttonColor : 'custom'}
                onValueChange={(value) => {
                  if (value === 'custom') {
                    setButtonColor(customColor);
                  } else {
                    setButtonColor(value);
                  }
                }}
                className="grid grid-cols-6 gap-4"
              >
                {colorOptions.map((color) => (
                  <div key={color.value} className="relative">
                    <RadioGroupItem
                      value={color.value}
                      id={color.value}
                      className="sr-only"
                    />
                    {color.value === 'custom' ? (
                      <>
                        <input
                          type="color"
                          id="custom-color-input"
                          value={customColor}
                          onChange={(e) => {
                            setCustomColor(e.target.value);
                            setButtonColor(e.target.value);
                          }}
                          className="sr-only"
                        />
                        <Label
                          htmlFor="custom-color-input"
                          className="cursor-pointer block text-center space-y-2"
                          onClick={() => {
                            document.getElementById('custom-color-input')?.click();
                            setButtonColor(customColor);
                          }}
                        >
                          <div
                            className={`
                              w-6 h-6 rounded-full mx-auto
                              transition-all duration-200
                              ring-2 ring-offset-2
                              cursor-pointer
                              ${!Object.values(colorOptions).some(opt => opt.value !== 'custom' && opt.value === buttonColor) ? 'ring-gray-400 scale-110' : 'ring-transparent'}
                              ${color.hoverClass}
                            `}
                            style={{ backgroundColor: customColor }}
                          />
                          <span className="text-sm font-medium block">{color.label}</span>
                        </Label>
                      </>
                    ) : (
                      <Label
                        htmlFor={color.value}
                        className="cursor-pointer block text-center space-y-2"
                      >
                        <div
                          className={`
                            w-6 h-6 rounded-full mx-auto
                            ${color.bgClass}
                            transition-all duration-200
                            ring-2 ring-offset-2
                            ${buttonColor === color.value ? 'ring-gray-400 scale-110' : 'ring-transparent'}
                            ${color.hoverClass}
                          `}
                        />
                        <span className="text-sm font-medium block">{color.label}</span>
                      </Label>
                    )}
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
            onClick={() => setShowFrame(!showFrame)}
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

          {showFrame && (
            <div
              style={{
                position: "absolute",
                ...chatPositionStyle,
                width: "280px",
                height: "320px",
                zIndex: 10,
              }}
            >
              <ChatIframe url={frameUrl} />
            </div>
          )}
        </div>

        <div className="mt-6 w-full max-w-2xl">
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm">
            <h4 className="font-semibold mb-2">Current Configuration:</h4>
            <Highlight
              theme={themes.palenight}
              code={`window.chatBubbleConfig = {
  frameUrl: '${frameUrl}',
  buttonColor: '${buttonColor}',
  buttonPosition: '${buttonPosition}',
  buttonSize: '60px',
  frameWidth: '320px',
  frameHeight: '400px',
};`}
              language="javascript"
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto font-mono text-sm leading-relaxed" style={style}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbleDemo;
