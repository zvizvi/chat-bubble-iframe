
import React, { useEffect, useRef } from "react";

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
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    updateIframe();
  }, [
    buttonPosition,
    buttonBackground,
    buttonColor,
    frameUrl,
    frameWidth,
    frameHeight,
    frameTitle,
    buttonIcon,
    openButtonIcon,
    hideHeader,
    headerBackground,
    headerColor,
    persistFrame
  ]);

  const updateIframe = () => {
    if (iframeRef.current) {
      // Create a blank HTML document with chat-bubble.js included
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Demo Page</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              padding: 20px;
              color: #333;
            }
            .demo-content {
              text-align: center;
              padding: 40px 20px;
              max-width: 500px;
              margin: 0 auto;
              line-height: 1.5;
            }
          </style>
        </head>
        <body>
          <div class="demo-content">
            <h2>Demo Page</h2>
            <p>This is a simulated webpage environment</p>
          </div>

          <script>
            // Chat Bubble Configuration
            window.chatBubbleConfig = {
              frameUrl: '${frameUrl}',
              frameTitle: '${frameTitle}',
              buttonBackground: '${buttonBackground}',
              buttonColor: '${buttonColor}',
              buttonPosition: '${buttonPosition}',
              frameWidth: '${frameWidth}px',
              frameHeight: '${frameHeight}px',
              buttonIcon: '${buttonIcon}',
              openButtonIcon: '${openButtonIcon}',
              hideHeader: ${hideHeader},
              headerBackground: '${headerBackground}',
              headerColor: '${headerColor}',
              persistFrame: ${persistFrame}
            };
          </script>
          <script src="/chat-bubble.js"></script>
        </body>
        </html>
      `;

      // Update the iframe's content
      const iframeDocument = iframeRef.current.contentDocument;
      if (iframeDocument) {
        iframeDocument.open();
        iframeDocument.write(htmlContent);
        iframeDocument.close();
      }
    }
  };

  return (
    <div className="relative flex flex-col w-full max-w-2xl bg-gray-50 rounded-lg border border-gray-200 min-h-[450px]">
      <iframe
        ref={iframeRef}
        className="w-full h-full flex-1 min-h-[400px] border-none"
        title="Chat Bubble Demo"
      />
    </div>
  );
};

export default ChatBubblePreview;
