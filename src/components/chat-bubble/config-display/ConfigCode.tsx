
import { CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ConfigDisplayProps } from "./types";
import { formatIconConfig } from "./utils";
import CodeDisplay from "./CodeDisplay";

const ConfigCode = ({
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

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "You can now paste the code in your project.",
      duration: 3000,
    });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold">Integration Code:</h4>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 text-xs"
          onClick={() => copyToClipboard(configCode)}
        >
          <CopyIcon size={14} />
          Copy Code
        </Button>
      </div>
      <CodeDisplay code={configCode} />
    </>
  );
};

export default ConfigCode;
