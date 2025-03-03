
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface HeaderOptionsProps {
  hideHeader: boolean;
  setHideHeader: (hide: boolean) => void;
  headerBackground: string;
  setHeaderBackground: (color: string) => void;
  headerColor: string;
  setHeaderColor: (color: string) => void;
  buttonColor: string;
  setButtonColor: (color: string) => void;
  persistFrame: boolean;
  setPersistFrame: (persist: boolean) => void;
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
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Header & Widget Options</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="hide-header" className="cursor-pointer">
            Hide Header
          </Label>
          <Switch
            id="hide-header"
            checked={hideHeader}
            onCheckedChange={setHideHeader}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="persist-frame" className="cursor-pointer">
            Keep widget alive when closed
          </Label>
          <Switch
            id="persist-frame"
            checked={persistFrame}
            onCheckedChange={setPersistFrame}
          />
        </div>
      </div>

      {!hideHeader && (
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="header-bg-color">Header Background</Label>
              <div className="flex space-x-2">
                <div 
                  className="w-10 h-10 rounded border"
                  style={{ backgroundColor: headerBackground }}
                ></div>
                <Input
                  id="header-bg-color"
                  type="text"
                  value={headerBackground}
                  onChange={(e) => setHeaderBackground(e.target.value)}
                  placeholder="#f9fafb"
                  className="flex-1"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="header-text-color">Header Text Color</Label>
              <div className="flex space-x-2">
                <div 
                  className="w-10 h-10 rounded border"
                  style={{ backgroundColor: headerColor }}
                ></div>
                <Input
                  id="header-text-color"
                  type="text"
                  value={headerColor}
                  onChange={(e) => setHeaderColor(e.target.value)}
                  placeholder="#000000"
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="button-text-color">Button Text Color</Label>
        <div className="flex space-x-2">
          <div 
            className="w-10 h-10 rounded border"
            style={{ backgroundColor: buttonColor }}
          ></div>
          <Input
            id="button-text-color"
            type="text"
            value={buttonColor}
            onChange={(e) => setButtonColor(e.target.value)}
            placeholder="#FFFFFF"
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderOptions;
