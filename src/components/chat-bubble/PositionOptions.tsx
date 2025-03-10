
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowDownRight, ArrowDownLeft, ArrowUpRight, ArrowUpLeft } from "lucide-react";

interface PositionOptionsProps {
  buttonPosition: string;
  setButtonPosition: (position: string) => void;
}

const PositionOptions = ({ buttonPosition, setButtonPosition }: PositionOptionsProps) => {
  const positionOptions = [
    {
      value: "bottom-right",
      label: "Bottom Right",
      icon: <ArrowDownRight className="w-4 h-4" />
    },
    {
      value: "bottom-left",
      label: "Bottom Left",
      icon: <ArrowDownLeft className="w-4 h-4" />
    },
    {
      value: "top-right",
      label: "Top Right",
      icon: <ArrowUpRight className="w-4 h-4" />
    },
    {
      value: "top-left",
      label: "Top Left",
      icon: <ArrowUpLeft className="w-4 h-4" />
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-md font-medium mb-4">Button Position</h3>
      <RadioGroup
        value={buttonPosition}
        onValueChange={setButtonPosition}
        className="grid grid-cols-2 gap-4"
      >
        {positionOptions.map((position) => (
          <div
            key={position.value}
            className={`flex items-center space-x-2 border ${
              buttonPosition === position.value 
                ? "border-primary bg-primary/10" 
                : "border-gray-200"
            } p-3 rounded-lg transition-colors`}
          >
            <RadioGroupItem value={position.value} id={position.value} />
            <Label htmlFor={position.value} className="flex items-center gap-2 cursor-pointer">
              {position.icon}
              <span>{position.label}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default PositionOptions;
