
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
  persistFrame,
  setPersistFrame
}: HeaderOptionsProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">More Options</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-1 max-w-72">
          <Label htmlFor="hide-header" className="cursor-pointer">
            Hide Header
          </Label>
          <Switch
            id="hide-header"
            checked={hideHeader}
            onCheckedChange={setHideHeader}
          />
        </div>

        <div className="flex items-center justify-between gap-1 max-w-72">
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
    </div>
  );
};

export default HeaderOptions;
