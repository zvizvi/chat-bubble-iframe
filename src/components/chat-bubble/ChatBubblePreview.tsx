
import ChatIframe from "../ChatIframe";
import { MessageCircle, ArrowDown, ArrowUp, X } from "lucide-react";
import React from "react";

interface ChatBubblePreviewProps {
  showFrame: boolean;
  setShowFrame: (show: boolean) => void;
  buttonPosition: string;
  buttonBackground: string;
  buttonColor: string;
  frameUrl: string;
  frameWidth: string;
  frameHeight: string;
  frameTitle: string;
  buttonIcon: string;
  openButtonIcon: string;
  hideHeader: boolean;
  headerBackground: string;
  headerColor: string;
  persistFrame: boolean;
}

const ChatBubblePreview = ({
  showFrame,
  setShowFrame,
  buttonPosition,
  buttonBackground,
  buttonColor = "#ffffff",
  frameUrl,
  frameWidth,
  frameHeight,
  frameTitle,
  buttonIcon,
  openButtonIcon,
  hideHeader = false,
  headerBackground = "#f9fafb",
  headerColor = "#000000",
  persistFrame = false
}: ChatBubblePreviewProps) => {

  const getPositionStyles = (position: string) => {
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

  const getChatContainerPosition = (position: string) => {
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

  const getButtonIcon = () => {
    const iconName = showFrame ? openButtonIcon : buttonIcon;

    // If icon is a keyword (not SVG), render the corresponding icon component
    if (iconName === "message-circle" || iconName === "arrow-up" ||
        iconName === "arrow-down" || iconName === "close") {
      switch (iconName) {
        case "arrow-up":
          return <ArrowUp />;
        case "arrow-down":
          return <ArrowDown />;
        case "close":
          return <X />;
        case "message-circle":
        default:
          return <MessageCircle />;
      }
    }

    // If it's an SVG string, render it as HTML
    if (typeof iconName === 'string' && iconName.trim().startsWith('<svg')) {
      return <span dangerouslySetInnerHTML={{ __html: iconName }} />;
    }

    // Fallback to message-circle
    return <MessageCircle />;
  };

  const buttonPositionStyle = getPositionStyles(buttonPosition);
  const chatPositionStyle = getChatContainerPosition(buttonPosition);

  return (
    <div className="relative w-full max-w-2xl bg-gray-50 rounded-lg p-4 md:p-8 border border-gray-200 min-h-[400px]">
      <div className="p-4 text-center text-gray-500 mb-8">
        <p>This is a simulated webpage environment</p>
      </div>

      <button
        style={{
          position: "absolute",
          ...buttonPositionStyle,
          backgroundColor: buttonBackground,
          color: buttonColor,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onClick={() => setShowFrame(!showFrame)}
      >
        {getButtonIcon()}
      </button>

      {(showFrame || (persistFrame && !showFrame)) && (
        <div
          style={{
            position: "absolute",
            ...chatPositionStyle,
            width: `${frameWidth}px`,
            height: `${frameHeight}px`,
            zIndex: 10,
            visibility: showFrame ? "visible" : "hidden",
            opacity: showFrame ? 1 : 0,
            transition: "opacity 0.3s ease, visibility 0.3s ease",
          }}
        >
          <ChatIframe
            url={frameUrl}
            title={frameTitle}
            onClose={() => setShowFrame(false)}
            hideHeader={hideHeader}
            headerBackground={headerBackground}
            headerColor={headerColor}
            persist={persistFrame}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBubblePreview;
