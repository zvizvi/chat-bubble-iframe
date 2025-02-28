
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
    buttonColor: '#3b82f6', // Button background color
    buttonPosition: 'bottom-right', // Options: 'bottom-right', 'bottom-left', 'top-right', 'top-left'
    buttonSize: '60px', // Button size (width and height)
    frameWidth: '320px', // open frame width
    frameHeight: '400px', // open frame height
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
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">buttonColor</code>: Any CSS color for the button's background</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">buttonPosition</code>: Where the button appears on the page</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">buttonSize</code>: Size of the trigger button</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">frameWidth</code>: Width of the open frame</p>
          <p><code className="bg-gray-200 px-1 py-0.5 rounded">frameHeight</code>: Height of the open frame</p>
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbleCode;
