
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
            .commands-panel {
              margin-top: 30px;
              padding: 20px;
              background-color: #f9fafb;
              border-radius: 8px;
              border: 1px solid #e5e7eb;
            }
            .commands-panel h3 {
              margin-top: 0;
              margin-bottom: 15px;
            }
            .command-group {
              margin-bottom: 20px;
            }
            .btn {
              background-color: #3b82f6;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 4px;
              margin-right: 8px;
              margin-bottom: 8px;
              cursor: pointer;
              font-size: 14px;
            }
            .btn:hover {
              background-color: #2563eb;
            }
            .input-group {
              display: flex;
              gap: 8px;
              margin-bottom: 10px;
              align-items: center;
            }
            .input-group input {
              padding: 8px;
              border-radius: 4px;
              border: 1px solid #e5e7eb;
              width: 80px;
            }
            .input-group label {
              min-width: 60px;
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
            
            <div class="commands-panel">
              <h3>Test postMessage Commands</h3>
              
              <div class="command-group">
                <h4>Control Chat Visibility:</h4>
                <button class="btn" onclick="toggleChat()">Toggle Chat</button>
                <button class="btn" onclick="openChat()">Open Chat</button>
                <button class="btn" onclick="closeChat()">Close Chat</button>
              </div>
              
              <div class="command-group">
                <h4>Resize Widget:</h4>
                <div class="input-group">
                  <label for="width">Width:</label>
                  <input type="number" id="width" value="${frameWidth}" min="200" max="500">
                  <label>px</label>
                </div>
                <div class="input-group">
                  <label for="height">Height:</label>
                  <input type="number" id="height" value="${frameHeight}" min="200" max="600">
                  <label>px</label>
                </div>
                <button class="btn" onclick="resizeWidget()">Apply Resize</button>
              </div>
              
              <div class="command-group">
                <h4>Get Configuration:</h4>
                <button class="btn" onclick="getConfig()">Get Current Config</button>
                <pre id="config-display" style="display: none; background: #f0f0f0; padding: 10px; border-radius: 4px; margin-top: 10px; max-height: 200px; overflow: auto;"></pre>
              </div>
            </div>
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
            
            // Functions to control the chat bubble via postMessage
            function toggleChat() {
              window.parent.postMessage({ type: 'toggle-chat' }, '*');
            }
            
            function openChat() {
              window.parent.postMessage({ type: 'open-chat' }, '*');
            }
            
            function closeChat() {
              window.parent.postMessage({ type: 'close-chat' }, '*');
            }
            
            function resizeWidget() {
              const width = document.getElementById('width').value;
              const height = document.getElementById('height').value;
              window.parent.postMessage({ 
                type: 'resize-widget',
                width: width + 'px',
                height: height + 'px'
              }, '*');
            }
            
            function getConfig() {
              window.parent.postMessage({ type: 'get-config' }, '*');
            }
            
            // Listen for messages from the parent window
            window.addEventListener('message', function(event) {
              // Check if the message is from our chatBubble
              if (event.data && event.data.type === 'chat-bubble-config') {
                const configDisplay = document.getElementById('config-display');
                configDisplay.textContent = JSON.stringify(event.data.config, null, 2);
                configDisplay.style.display = 'block';
              }
              
              if (event.data && event.data.type === 'chat-bubble-opened') {
                console.log('Chat bubble was opened');
              }
              
              if (event.data && event.data.type === 'chat-bubble-closing') {
                console.log('Chat bubble is closing');
              }
            });
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
