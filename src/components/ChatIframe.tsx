
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface ChatIframeProps {
  url?: string;
  title?: string;
  onClose?: () => void;
  hideHeader?: boolean;
  headerBackground?: string;
  headerColor?: string;
  persist?: boolean;
}

const ChatIframe = ({
  url: iframeUrl,
  title = "",
  onClose,
  hideHeader = false,
  headerBackground,
  headerColor,
  persist = false
}: ChatIframeProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden shadow-lg border border-gray-200 animate-fade-in">
      {!hideHeader && (
        <div
          className="p-3 border-b border-gray-200 flex justify-between items-center"
          style={{
            backgroundColor: headerBackground || "#f9fafb", // equivalent to bg-gray-50
            color: headerColor || "inherit"
          }}
        >
          <div className="font-medium">{title}</div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      <div className="flex-1 overflow-hidden">
        <iframe
          src={iframeUrl}
          className="w-full h-full border-none"
          title="Chat Frame"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>
    </Card>
  );
};

export default ChatIframe;
