
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PositionOptionsProps {
  buttonPosition: string;
  setButtonPosition: (position: string) => void;
}

const PositionOptions = ({ buttonPosition, setButtonPosition }: PositionOptionsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-md font-medium mb-4">Button Position</h3>
      <RadioGroup
        value={buttonPosition}
        onValueChange={setButtonPosition}
        className="grid grid-cols-2 gap-4"
      >
        <div className="flex items-center space-x-2 border border-gray-200 p-3 rounded-lg">
          <RadioGroupItem value="bottom-right" id="bottom-right" />
          <Label htmlFor="bottom-right">Bottom Right</Label>
        </div>
        <div className="flex items-center space-x-2 border border-gray-200 p-3 rounded-lg">
          <RadioGroupItem value="bottom-left" id="bottom-left" />
          <Label htmlFor="bottom-left">Bottom Left</Label>
        </div>
        <div className="flex items-center space-x-2 border border-gray-200 p-3 rounded-lg">
          <RadioGroupItem value="top-right" id="top-right" />
          <Label htmlFor="top-right">Top Right</Label>
        </div>
        <div className="flex items-center space-x-2 border border-gray-200 p-3 rounded-lg">
          <RadioGroupItem value="top-left" id="top-left" />
          <Label htmlFor="top-left">Top Left</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default PositionOptions;
