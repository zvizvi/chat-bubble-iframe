
import React, { useEffect, useRef } from "react";

interface ChatBubblePreviewProps {
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
            @keyframes slide-in-up {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes slide-out-down {
              0% {
                opacity: 1;
                transform: translateY(0);
              }
              100% {
                opacity: 0;
                transform: translateY(20px);
              }
            }
          </style>
        </head>
        <body>
          <div class="demo-content">
            <h2>Demo Page</h2>
            <p>This is a simulated webpage environment</p>
          </div>

          <script>
            window.chatBubbleConfig = {
              header: {
                shown: ${!hideHeader},
                backgroundColor: '${headerBackground}',
                textColor: '${headerColor}',
                title: '${frameTitle}'
              },
              frame: {
                url: '${frameUrl}',
                width: '${frameWidth}px',
                height: '${frameHeight}px',
                persist: ${persistFrame}
              },
              button: {
                icon: '${buttonIcon}',
                backgroundColor: '${buttonBackground}',
                textColor: '${buttonColor}',
                position: '${buttonPosition}',
                size: '60px'
              },
              openButton: {
                icon: '${openButtonIcon}',
                backgroundColor: '${buttonBackground}',
                textColor: '${buttonColor}'
              }
            };
          </script>
          <script src="/chat-bubble.js"></script>
        </body>
        </html>
      `;

      const iframeDocument = iframeRef.current.contentDocument;
      if (iframeDocument) {
        iframeDocument.open();
        iframeDocument.write(htmlContent);
        iframeDocument.close();
      }
    }
  };

  return (
    <div className="relative flex flex-col w-full max-w-3xl bg-gray-50 rounded-lg border border-gray-200 min-h-[500px]">
      <iframe
        ref={iframeRef}
        className="w-full h-full flex-1 min-h-[400px] border-none"
        title="Chat Bubble Demo"
      />
    </div>
  );
};

export default ChatBubblePreview;
