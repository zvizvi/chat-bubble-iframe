
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";

const ChatBubbleCode = () => {
  const [copied, setCopied] = useState(false);

  const scriptCode = `<script>
  // Chat Bubble Configuration
  window.chatBubbleConfig = {
    frameUrl: 'https://your-iframe-url.com/', // URL to load in the iframe
    frameTitle: 'Chat Support', // Title for the chat widget
    buttonColor: '#3b82f6', // Button background color
    buttonPosition: 'bottom-right', // Options: 'bottom-right', 'bottom-left', 'top-right', 'top-left'
    buttonSize: '60px', // Button size (width and height)
    frameWidth: '320px', // open frame width
    frameHeight: '400px', // open frame height
    
    // Button Icons - you can use either:
    // 1. A simple keyword: 'message-circle', 'arrow-up', 'arrow-down', 'close'
    // 2. Or a full SVG string as shown below
    buttonIcon: 'message-circle', // Icon when chat is closed (using keyword)
    // Alternative with SVG: 
    // buttonIcon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21 16.9706 16.9706 21 12 21C10.8976 21 9.82578 20.8204 8.82353 20.4857C8.74178 20.4594 8.65567 20.4472 8.57143 20.4472C8.4881 20.4472 8.40477 20.4594 8.32353 20.4857L3.58333 21.9857C3.22241 22.093 2.83138 21.8562 2.83333 21.4764V16.4671C2.83333 16.3682 2.80277 16.2713 2.74609 16.1868C1.65389 14.5489 1 12.576 1 10.5C1 5.52944 5.02944 1.5 10 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    
    openButtonIcon: 'close', // Icon when chat is open (using keyword)
    // Alternative with SVG:
    // openButtonIcon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  };
</script>
<script src="https://your-website.com/chat-bubble.js"></script>`;

  const copyToClipboard = () => {
    const codeToCopy = scriptCode.replace(/,\s\/\/.*\n/g, ",\n") + '\n';
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="p-4 bg-gray-50 border border-gray-200 overflow-hidden">
      <div className="flex justify-end items-center mb-2">
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
      <pre className="text-sm overflow-x-auto pb-2 rounded-md">
        <Highlight
          theme={themes.palenight}
          code={scriptCode}
          language="html"
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
      </pre>
      <div className="mt-4 text-sm text-gray-600">
        <p>To use this script:</p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li>Copy the code above</li>
          <li>Paste it at the bottom of your HTML head section</li>
          <li>Customize the configuration options:</li>
        </ol>
        <div className="mt-3 pl-5 space-y-2">
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">frameUrl</code>: URL of your page that will load in the iframe</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">frameTitle</code>: Title for the chat widget</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">buttonColor</code>: Any CSS color for the button's background</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">buttonPosition</code>: Where the button appears on the page</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">buttonSize</code>: Size of the trigger button</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">frameWidth</code>: Width of the open frame</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">frameHeight</code>: Height of the open frame</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">buttonIcon</code>: Icon for button when chat is closed (use a keyword or SVG string)</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">openButtonIcon</code>: Icon for button when chat is open (use a keyword or SVG string)</p>
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbleCode;
