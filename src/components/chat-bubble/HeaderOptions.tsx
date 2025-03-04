
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

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

        {!hideHeader && (
          <>
            <div className="space-y-2">
              <Label htmlFor="header-bg" className="block font-medium">Header Background</Label>
              <div className="flex gap-3 items-center">
                <input
                  id="header-bg"
                  type="color"
                  value={headerBackground}
                  onChange={(e) => setHeaderBackground(e.target.value)}
                  className="h-10 w-10 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={headerBackground}
                  onChange={(e) => setHeaderBackground(e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="header-color" className="block font-medium">Header Text Color</Label>
              <div className="flex gap-3 items-center">
                <input
                  id="header-color"
                  type="color"
                  value={headerColor}
                  onChange={(e) => setHeaderColor(e.target.value)}
                  className="h-10 w-10 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={headerColor}
                  onChange={(e) => setHeaderColor(e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>
            </div>
          </>
        )}

        <div className="space-y-2">
          <Label htmlFor="button-color" className="block font-medium">Button Text Color</Label>
          <div className="flex gap-3 items-center">
            <input
              id="button-color"
              type="color"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
              className="h-10 w-10 rounded cursor-pointer"
            />
            <input
              type="text"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
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
      </div>
    </Card>
  );
};

export default HeaderOptions;
