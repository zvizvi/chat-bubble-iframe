
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

const ChatBubbleCode = () => {
  const [copied, setCopied] = useState(false);
  
  const scriptCode = `<script>
  (function() {
    // Create stylesheet
    const style = document.createElement('style');
    style.innerHTML = \`
      .chat-bubble-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #3b82f6;
        color: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 9999;
        transition: all 0.3s ease;
      }
      .chat-bubble-button:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
      }
      .chat-bubble-icon {
        width: 24px;
        height: 24px;
      }
      .chat-iframe-container {
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 320px;
        height: 400px;
        z-index: 9999;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        display: none;
        transition: all 0.3s ease;
      }
      .chat-iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    \`;
    document.head.appendChild(style);

    // Create button
    const button = document.createElement('div');
    button.className = 'chat-bubble-button';
    button.innerHTML = \`
      <svg class="chat-bubble-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C10.8976 21 9.82578 20.8204 8.82353 20.4857C8.74178 20.4594 8.65567 20.4472 8.57143 20.4472C8.4881 20.4472 8.40477 20.4594 8.32353 20.4857L3.58333 21.9857C3.22241 22.093 2.83138 21.8562 2.83333 21.4764V16.4671C2.83333 16.3682 2.80277 16.2713 2.74609 16.1868C1.65389 14.5489 1 12.576 1 10.5C1 5.52944 5.02944 1.5 10 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5 7.5V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.5 7.5V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.5 7.5V8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    \`;
    document.body.appendChild(button);

    // Create iframe container
    const iframeContainer = document.createElement('div');
    iframeContainer.className = 'chat-iframe-container';
    document.body.appendChild(iframeContainer);

    // Toggle chat function
    button.addEventListener('click', function() {
      if (iframeContainer.style.display === 'block') {
        iframeContainer.style.display = 'none';
      } else {
        iframeContainer.style.display = 'block';
        if (!iframeContainer.querySelector('iframe')) {
          const iframe = document.createElement('iframe');
          iframe.className = 'chat-iframe';
          iframe.src = 'https://your-chat-url.com/'; // Replace with your chat URL
          iframeContainer.appendChild(iframe);
        }
      }
    });
  })();
</script>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="p-4 bg-gray-50 border border-gray-200 overflow-hidden">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-mono text-gray-500">chat-bubble.js</div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={copyToClipboard}
          className="h-8 flex items-center gap-1.5 text-gray-600 hover:text-gray-900"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" /> Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" /> Copy code
            </>
          )}
        </Button>
      </div>
      <pre className="text-sm overflow-x-auto p-4 bg-gray-900 text-gray-100 rounded-md">
        <code>{scriptCode}</code>
      </pre>
      <div className="mt-4 text-sm text-gray-600">
        <p>To use this script:</p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li>Copy the code above</li>
          <li>Paste it at the bottom of your HTML body</li>
          <li>Replace <code className="bg-gray-200 px-1 py-0.5 rounded">https://your-chat-url.com/</code> with your actual chat page URL</li>
        </ol>
      </div>
    </Card>
  );
};

export default ChatBubbleCode;
