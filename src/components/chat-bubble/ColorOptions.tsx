
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ColorOptionsProps {
  buttonColor: string;
  setButtonColor: (color: string) => void;
}

const ColorOptions = ({ buttonColor, setButtonColor }: ColorOptionsProps) => {
  const colorOptions = [
    { value: "#3b82f6", label: "Blue", bgClass: "bg-blue-500", hoverClass: "hover:ring-blue-300" },
    { value: "#8B5CF6", label: "Purple", bgClass: "bg-purple-500", hoverClass: "hover:ring-purple-300" },
    { value: "#F97316", label: "Orange", bgClass: "bg-orange-500", hoverClass: "hover:ring-orange-300" },
    { value: "#10B981", label: "Green", bgClass: "bg-green-500", hoverClass: "hover:ring-green-300" },
    { value: "#F43F5E", label: "Red", bgClass: "bg-red-500", hoverClass: "hover:ring-red-300" },
    { value: "custom", label: "Custom", bgClass: "", hoverClass: "hover:ring-gray-300" },
  ];

  const [customColor, setCustomColor] = useState("#000000");

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Color</h3>
      <RadioGroup
        value={Object.values(colorOptions).some(opt => opt.value !== 'custom' && opt.value === buttonColor) ? buttonColor : 'custom'}
        onValueChange={(value) => {
          if (value === 'custom') {
            setButtonColor(customColor);
          } else {
            setButtonColor(value);
          }
        }}
        className="grid grid-cols-6 gap-4"
      >
        {colorOptions.map((color) => (
          <div key={color.value} className="relative">
            <RadioGroupItem
              value={color.value}
              id={color.value}
              className="sr-only"
            />
            {color.value === 'custom' ? (
              <>
                <input
                  type="color"
                  id="custom-color-input"
                  value={customColor}
                  onChange={(e) => {
                    setCustomColor(e.target.value);
                    setButtonColor(e.target.value);
                  }}
                  className="sr-only"
                />
                <Label
                  htmlFor="custom-color-input"
                  className="cursor-pointer block text-center space-y-2"
                  onClick={() => {
                    document.getElementById('custom-color-input')?.click();
                    setButtonColor(customColor);
                  }}
                >
                  <div
                    className={`
                    w-6 h-6 rounded-full mx-auto
                    transition-all duration-200
                    ring-2 ring-offset-2
                    cursor-pointer
                    ${!Object.values(colorOptions).some(opt => opt.value !== 'custom' && opt.value === buttonColor) ? 'ring-gray-400 scale-110' : 'ring-transparent'}
                    ${color.hoverClass}
                  `}
                    style={{ backgroundColor: customColor }}
                  />
                  <span className="text-sm font-medium block">{color.label}</span>
                </Label>
              </>
            ) : (
              <Label
                htmlFor={color.value}
                className="cursor-pointer block text-center space-y-2"
              >
                <div
                  className={`
                  w-6 h-6 rounded-full mx-auto
                  ${color.bgClass}
                  transition-all duration-200
                  ring-2 ring-offset-2
                  ${buttonColor === color.value ? 'ring-gray-400 scale-110' : 'ring-transparent'}
                  ${color.hoverClass}
                `}
                />
                <span className="text-sm font-medium block">{color.label}</span>
              </Label>
            )}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ColorOptions;
