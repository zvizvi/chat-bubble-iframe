
import { Highlight, themes } from "prism-react-renderer";
import { CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ConfigDisplayProps {
  frameUrl: string;
  frameTitle: string;
  buttonBackground: string;
  buttonPosition: string;
  frameWidth: string;
  frameHeight: string;
  buttonIcon: string;
  openButtonIcon: string;
  hideHeader?: boolean;
  headerBackground?: string;
  headerColor?: string;
  buttonColor?: string;
  persistFrame?: boolean;
}

const ConfigDisplay = ({
  frameUrl,
  frameTitle,
  buttonBackground,
  buttonPosition,
  frameWidth,
  frameHeight,
  buttonIcon,
  openButtonIcon,
  hideHeader = false,
  headerBackground = "#f9fafb",
  headerColor = "#000000",
  buttonColor = "#ffffff",
  persistFrame = false
}: ConfigDisplayProps) => {
  const { toast } = useToast();

  // Function to format the icon config value based on whether it's a keyword or SVG
  const formatIconConfig = (icon: string) => {
    const keywords = ["message-circle", "arrow-up", "arrow-down", "close"];

    // If it's a keyword, use it directly
    if (keywords.includes(icon)) {
      return `'${icon}'`;
    }

    // If it starts with <svg, it's an SVG string
    if (icon.trim().startsWith('<svg')) {
      return `'${icon.replace(/'/g, "\\'")}'`;
    }

    // Default fallback
    return `'message-circle'`;
  };

  const configCode = `// Add this code to your website
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
    icon: ${formatIconConfig(buttonIcon)},
    backgroundColor: '${buttonBackground}',
    textColor: '${buttonColor}',
    position: '${buttonPosition}',
    size: '60px'
  },
  openButton: {
    icon: ${formatIconConfig(openButtonIcon)},
    backgroundColor: '${buttonBackground}',
    textColor: '${buttonColor}'
  }
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
