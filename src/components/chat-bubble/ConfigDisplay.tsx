
import { Highlight, themes } from "prism-react-renderer";
import { CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const apiCode = `// External API (from parent page)
// You can control the widget programmatically from the parent page:
window.chatBubbleAPI.toggle();  // Toggle open/close
window.chatBubbleAPI.open();    // Open the widget
window.chatBubbleAPI.close();   // Close the widget
window.chatBubbleAPI.resize('350px', '450px');  // Resize the widget
window.chatBubbleAPI.getConfig();  // Get current configuration

// Internal API (from inside the iframe)
// You can control the widget from inside the iframe using postMessage:

// Toggle the widget open/close
window.parent.postMessage({ type: 'toggle-chat' }, '*');

// Open the widget
window.parent.postMessage({ type: 'open-chat' }, '*');

// Close the widget
window.parent.postMessage({ type: 'close-chat' }, '*');

// Resize the widget
window.parent.postMessage({ 
  type: 'resize-widget',
  width: '350px',
  height: '450px'
}, '*');

// Get current configuration
window.parent.postMessage({ type: 'get-config' }, '*');

// Listen for events from the widget
window.addEventListener('message', function(event) {
  if (event.data.type === 'chat-bubble-config') {
    // Configuration data
    console.log(event.data.config);
  }
  
  if (event.data.type === 'chat-bubble-opened') {
    // Chat bubble was opened
    console.log('Chat opened');
  }
  
  if (event.data.type === 'chat-bubble-closing') {
    // Chat bubble is closing
    console.log('Chat closing');
  }
});`;

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "You can now paste the code in your project.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
      <Tabs defaultValue="config">
        <TabsList className="mb-4 w-full">
          <TabsTrigger value="config" className="flex-1">Configuration</TabsTrigger>
          <TabsTrigger value="api" className="flex-1">PostMessage API</TabsTrigger>
        </TabsList>
        
        <TabsContent value="config">
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
        </TabsContent>
        
        <TabsContent value="api">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold">PostMessage API Documentation:</h4>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 text-xs"
              onClick={() => copyToClipboard(apiCode)}
            >
              <CopyIcon size={14} />
              Copy Code
            </Button>
          </div>
          <Highlight
            theme={themes.palenight}
            code={apiCode}
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConfigDisplay;
