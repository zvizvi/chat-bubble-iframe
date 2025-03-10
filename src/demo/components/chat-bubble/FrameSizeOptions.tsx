
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface FrameSizeOptionsProps {
  frameWidth: string;
  setFrameWidth: (width: string) => void;
  frameHeight: string;
  setFrameHeight: (height: string) => void;
}

const FrameSizeOptions = ({
  frameWidth,
  setFrameWidth,
  frameHeight,
  setFrameHeight
}: FrameSizeOptionsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-md font-medium mb-4">Chat Window Size</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="frame-width">Width (px)</Label>
            <Input
              id="frame-width"
              type="number"
              value={frameWidth}
              onChange={(e) => setFrameWidth(e.target.value)}
              className="w-24"
              min="200"
              max="500"
            />
          </div>
          <Slider
            value={[Number(frameWidth)]}
            min={200}
            max={500}
            step={10}
            onValueChange={(value) => setFrameWidth(value[0].toString())}
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="frame-height">Height (px)</Label>
            <Input
              id="frame-height"
              type="number"
              value={frameHeight}
              onChange={(e) => setFrameHeight(e.target.value)}
              className="w-24"
              min="200"
              max="600"
            />
          </div>
          <Slider
            value={[Number(frameHeight)]}
            min={200}
            max={600}
            step={10}
            onValueChange={(value) => setFrameHeight(value[0].toString())}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameSizeOptions;
