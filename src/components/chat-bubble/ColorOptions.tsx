
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ColorOptionsProps {
  buttonBackground: string;
  setButtonBackground: (color: string) => void;
  buttonColor?: string;
  setButtonColor?: (color: string) => void;
}

const ColorOptions = ({
  buttonBackground,
  setButtonBackground,
  buttonColor,
  setButtonColor
}: ColorOptionsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-md font-medium mb-4">Button Color</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="button-background">Background Color</Label>
          <div className="flex items-center gap-2">
            <div
              className="h-5 w-5 rounded-full border border-gray-200"
              style={{ backgroundColor: buttonBackground }}
            />
            <Input
              id="button-background"
              type="text"
              value={buttonBackground}
              onChange={(e) => setButtonBackground(e.target.value)}
              className="w-24"
            />
          </div>
        </div>

        {buttonColor && setButtonColor && (
          <div className="flex items-center justify-between">
            <Label htmlFor="button-color">Text Color</Label>
            <div className="flex items-center gap-2">
              <div
                className="h-5 w-5 rounded-full border border-gray-200"
                style={{ backgroundColor: buttonColor }}
              />
              <Input
                id="button-color"
                type="text"
                value={buttonColor}
                onChange={(e) => setButtonColor(e.target.value)}
                className="w-24"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorOptions;
