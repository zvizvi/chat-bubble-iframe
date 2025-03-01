
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FrameConfigInputsProps {
  frameUrl: string;
  setFrameUrl: (url: string) => void;
  frameTitle: string;
  setFrameTitle: (title: string) => void;
}

const FrameConfigInputs = ({ frameUrl, setFrameUrl, frameTitle, setFrameTitle }: FrameConfigInputsProps) => {
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
    </div>
  );
};

export default FrameConfigInputs;
