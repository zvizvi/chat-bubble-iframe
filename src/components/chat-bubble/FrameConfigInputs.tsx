
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, ArrowDown, ArrowUp, X } from "lucide-react";

interface FrameConfigInputsProps {
  frameUrl: string;
  setFrameUrl: (url: string) => void;
  frameTitle: string;
  setFrameTitle: (title: string) => void;
  buttonIcon: string;
  setButtonIcon: (icon: string) => void;
  openButtonIcon: string;
  setOpenButtonIcon: (icon: string) => void;
}

const FrameConfigInputs = ({
  frameUrl,
  setFrameUrl,
  frameTitle,
  setFrameTitle,
  buttonIcon,
  setButtonIcon,
  openButtonIcon,
  setOpenButtonIcon
}: FrameConfigInputsProps) => {

  const iconOptions = [
    { value: "message-circle", label: "Message Circle", icon: <MessageCircle className="h-4 w-4" /> },
    { value: "arrow-up", label: "Arrow Up", icon: <ArrowUp className="h-4 w-4" /> },
    { value: "arrow-down", label: "Arrow Down", icon: <ArrowDown className="h-4 w-4" /> },
    { value: "close", label: "Close", icon: <X className="h-4 w-4" /> },
  ];

  return (
    <div className="py-8 space-y-8">
      <div className="space-y-2">
        <Label htmlFor="chat-url">URL to open in iframe</Label>
        <Input
          id="chat-url"
          value={frameUrl}
          onChange={(e) => setFrameUrl(e.target.value)}
          placeholder="https://your-iframe-url.com/"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="chat-title">Chat Widget Title</Label>
        <Input
          id="chat-title"
          value={frameTitle}
          onChange={(e) => setFrameTitle(e.target.value)}
          placeholder="Chat Support"
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="button-icon">Button Icon (Closed State)</Label>
          <Select value={buttonIcon} onValueChange={setButtonIcon}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Icon" />
            </SelectTrigger>
            <SelectContent>
              {iconOptions.filter((item) => item.value !== "arrow-down").map((icon) => (
                <SelectItem key={icon.value} value={icon.value}>
                  <div className="flex items-center gap-2">
                    {icon.icon}
                    <span>{icon.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="open-button-icon">Button Icon (Open State)</Label>
          <Select value={openButtonIcon} onValueChange={setOpenButtonIcon}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Icon" />
            </SelectTrigger>
            <SelectContent>
              {iconOptions.filter((item) => item.value !== "arrow-up").map((icon) => (
                <SelectItem key={icon.value} value={icon.value}>
                  <div className="flex items-center gap-2">
                    {icon.icon}
                    <span>{icon.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FrameConfigInputs;
