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
    header: {
      shown: true, // Set to false to completely hide the header
      backgroundColor: '#f9fafb', // Header background color
      textColor: '#000000', // Header text color
      title: 'Chat Support' // Title for the chat widget
    },
    frame: {
      url: 'https://your-iframe-url.com/', // URL to load in the iframe
      width: '320px', // open frame width
      height: '400px', // open frame height
      persist: false // When true, keeps the iframe alive when chat is closed
    },
    button: {
      icon: 'message-circle', // Icon when chat is closed (using keyword)
      backgroundColor: '#3b82f6', // Button background color
      textColor: '#ffffff', // Button text/icon color
      position: 'bottom-right', // Options: 'bottom-right', 'bottom-left', 'top-right', 'top-left'
      size: '60px' // Button size (width and height)
    },
    openButton: {
      icon: 'close', // Icon when chat is open (using keyword)
      backgroundColor: '#3b82f6', // Open button background color
      textColor: '#ffffff' // Open button text/icon color
    }
    
    // You can also use SVG for icons:
    // button: {
    //   icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    //   ...other properties
    // }
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
          <li>Customize the configuration options</li>
        </ol>
        <div className="mt-3 pl-5 space-y-2">
          <p className="font-semibold mt-2">Header Options:</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">header.shown</code>: Set to false to hide the header</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">header.title</code>: Title for the chat widget</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">header.backgroundColor</code>: Any CSS color for the header's background</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">header.textColor</code>: Any CSS color for the header's text</p>
          
          <p className="font-semibold mt-2">Frame Options:</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">frame.url</code>: URL of your page that will load in the iframe</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">frame.width</code>: Width of the open frame</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">frame.height</code>: Height of the open frame</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">frame.persist</code>: Set to true to keep the iframe alive when chat is closed</p>
          
          <p className="font-semibold mt-2">Button Options:</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">button.backgroundColor</code>: Any CSS color for the button's background</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">button.textColor</code>: Any CSS color for the button's icon/text</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">button.position</code>: Where the button appears on the page</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">button.size</code>: Size of the trigger button</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">button.icon</code>: Icon for button when chat is closed (use a keyword or SVG string)</p>
          
          <p className="font-semibold mt-2">Open Button Options:</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">openButton.icon</code>: Icon for button when chat is open (use a keyword or SVG string)</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">openButton.backgroundColor</code>: Background color for the open button</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">openButton.textColor</code>: Text/icon color for the open button</p>
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbleCode;
