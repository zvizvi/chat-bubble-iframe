
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FrameSizeOptionsProps {
  frameWidth: string;
  setFrameWidth: (width: string) => void;
  frameHeight: string;
  setFrameHeight: (height: string) => void;
}

const FrameSizeOptions = ({ frameWidth, setFrameWidth, frameHeight, setFrameHeight }: FrameSizeOptionsProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-medium">Frame Size</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="frame-width">Width (px)</Label>
          <Input
            id="frame-width"
            type="number"
            min="200"
            max="800"
            value={frameWidth}
            onChange={(e) => setFrameWidth(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="frame-height">Height (px)</Label>
          <Input
            id="frame-height"
            type="number"
            min="200"
            max="800"
            value={frameHeight}
            onChange={(e) => setFrameHeight(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameSizeOptions;
