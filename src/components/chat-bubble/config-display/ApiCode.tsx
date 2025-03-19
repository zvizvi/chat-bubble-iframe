
import { CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import CodeDisplay from "./CodeDisplay";

const ApiCode = () => {
  const { toast } = useToast();

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
    <>
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
      <CodeDisplay code={apiCode} />
    </>
  );
};

export default ApiCode;
