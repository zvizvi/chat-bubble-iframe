
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PositionOptionsProps {
  buttonPosition: string;
  setButtonPosition: (position: string) => void;
}

const PositionOptions = ({ buttonPosition, setButtonPosition }: PositionOptionsProps) => {
  const positionOptions = [
    {
      value: "bottom-right",
      label: "Bottom Right",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
          <path d="M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13" y="13" width="6" height="4" rx="1" fill="currentColor" />
        </svg>
      )
    },
    {
      value: "bottom-left",
      label: "Bottom Left",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
          <path d="M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z" stroke="currentColor" strokeWidth="1.5" />
          <rect x="5" y="13" width="6" height="4" rx="1" fill="currentColor" />
        </svg>
      )
    },
    {
      value: "top-right",
      label: "Top Right",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
          <path d="M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z" stroke="currentColor" strokeWidth="1.5" />
          <rect x="13" y="7" width="6" height="4" rx="1" fill="currentColor" />
        </svg>
      )
    },
    {
      value: "top-left",
      label: "Top Left",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
          <path d="M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z" stroke="currentColor" strokeWidth="1.5" />
          <rect x="5" y="7" width="6" height="4" rx="1" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Position</h3>
      <RadioGroup
        value={buttonPosition}
        onValueChange={setButtonPosition}
        className="grid grid-cols-2 gap-4"
      >
        {positionOptions.map((position) => (
          <div
            key={position.value}
            className={`relative p-4 border rounded-lg transition-all duration-200 ${buttonPosition === position.value ? 'border-gray-400 bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}
          >
            <RadioGroupItem
              value={position.value}
              id={position.value}
              className="sr-only"
            />
            <Label
              htmlFor={position.value}
              className="flex flex-col items-center cursor-pointer space-y-2"
            >
              <div className="text-gray-600">{position.icon}</div>
              <span className="text-sm font-medium">{position.label}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default PositionOptions;
