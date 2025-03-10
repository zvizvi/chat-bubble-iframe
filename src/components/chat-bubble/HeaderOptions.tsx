
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export interface HeaderOptionsProps {
  hideHeader: boolean;
  setHideHeader: (value: boolean) => void;
  headerBackground: string;
  setHeaderBackground: (value: string) => void;
  headerColor: string;
  setHeaderColor: (value: string) => void;
  buttonColor: string;
  setButtonColor: (value: string) => void;
  persistFrame: boolean;
  setPersistFrame: (value: boolean) => void;
}

const HeaderOptions = ({
  hideHeader,
  setHideHeader,
  headerBackground,
  setHeaderBackground,
  headerColor,
  setHeaderColor,
  buttonColor,
  setButtonColor,
  persistFrame,
  setPersistFrame
}: HeaderOptionsProps) => {
  return (
    <Card className="p-4 rounded-lg">
      <h3 className="text-md font-medium mb-4">Advanced Options</h3>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="hide-header" className="font-medium">Hide Header</Label>
            <p className="text-sm text-gray-500">Remove the title bar from the chat window</p>
          </div>
          <Switch
            id="hide-header"
            checked={hideHeader}
            onCheckedChange={setHideHeader}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="persist-frame" className="font-medium">Keep Widget Alive</Label>
            <p className="text-sm text-gray-500">Maintain iframe when chat is closed</p>
          </div>
          <Switch
            id="persist-frame"
            checked={persistFrame}
            onCheckedChange={setPersistFrame}
          />
        </div>

        {!hideHeader && (
          <div className="space-y-3 pt-2 border-t border-gray-100">
            <h4 className="text-sm font-medium">Header Styling</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="header-bg" className="text-sm">Background</Label>
                <div className="flex items-center gap-2">
                  <div 
                    className="h-4 w-4 rounded-full border"
                    style={{ backgroundColor: headerBackground }}
                  />
                  <Input
                    id="header-bg"
                    value={headerBackground}
                    onChange={(e) => setHeaderBackground(e.target.value)}
                    className="h-8"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="header-color" className="text-sm">Text Color</Label>
                <div className="flex items-center gap-2">
                  <div 
                    className="h-4 w-4 rounded-full border"
                    style={{ backgroundColor: headerColor }}
                  />
                  <Input
                    id="header-color"
                    value={headerColor}
                    onChange={(e) => setHeaderColor(e.target.value)}
                    className="h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-1">
          <Label htmlFor="button-color" className="text-sm">Button Text Color</Label>
          <div className="flex items-center gap-2">
            <div 
              className="h-4 w-4 rounded-full border"
              style={{ backgroundColor: buttonColor }}
            />
            <Input
              id="button-color"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
              className="h-8"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeaderOptions;
