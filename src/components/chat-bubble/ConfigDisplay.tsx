
import { Highlight, themes } from "prism-react-renderer";
import { CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ConfigDisplayProps {
  frameUrl: string;
  frameTitle: string;
  buttonColor: string;
  buttonPosition: string;
  frameWidth: string;
  frameHeight: string;
  buttonIcon: string;
  openButtonIcon: string;
}

const ConfigDisplay = ({
  frameUrl,
  frameTitle,
  buttonColor,
  buttonPosition,
  frameWidth,
  frameHeight,
  buttonIcon,
  openButtonIcon
}: ConfigDisplayProps) => {
  const { toast } = useToast();

  const configCode = `// Add this code to your website
window.chatBubbleConfig = {
  frameUrl: '${frameUrl}',
  frameTitle: '${frameTitle}',
  buttonColor: '${buttonColor}',
  buttonPosition: '${buttonPosition}',
  buttonSize: '60px',
  frameWidth: '${frameWidth}px',
  frameHeight: '${frameHeight}px',
  buttonIcon: '${buttonIcon}',
  openButtonIcon: '${openButtonIcon}',
};

// Then import the chat-bubble.js script
// <script src="path/to/chat-bubble.js"></script>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(configCode);
    toast({
      title: "Configuration copied to clipboard",
      description: "Now you can paste it in your website.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold">Integration Code:</h4>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 text-xs"
          onClick={copyToClipboard}
        >
          <CopyIcon size={14} />
          Copy Code
        </Button>
      </div>
      <Highlight
        theme={themes.palenight}
        code={configCode}
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
  );
};

export default ConfigDisplay;
