
import ChatIframe from "../ChatIframe";

interface ChatBubblePreviewProps {
  showFrame: boolean;
  setShowFrame: (show: boolean) => void;
  buttonPosition: string;
  buttonColor: string;
  frameUrl: string;
  frameWidth: string;
  frameHeight: string;
  frameTitle: string;
}

const ChatBubblePreview = ({
  showFrame,
  setShowFrame,
  buttonPosition,
  buttonColor,
  frameUrl,
  frameWidth,
  frameHeight,
  frameTitle
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
            width: `${frameWidth}px`,
            height: `${frameHeight}px`,
            zIndex: 10,
          }}
        >
          <ChatIframe 
            url={frameUrl} 
            title={frameTitle}
            onClose={() => setShowFrame(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBubblePreview;
