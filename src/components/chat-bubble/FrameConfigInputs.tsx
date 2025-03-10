
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FrameConfigInputsProps {
  frameUrl: string;
  setFrameUrl: (url: string) => void;
  frameTitle: string;
  setFrameTitle: (title: string) => void;
  buttonIcon: string;
  setButtonIcon: (icon: string) => void;
  openButtonIcon: string;
  setOpenButtonIcon: (icon: string) => void;
}

const FrameConfigInputs = ({
  frameUrl,
  setFrameUrl,
  frameTitle,
  setFrameTitle,
  buttonIcon,
  setButtonIcon,
  openButtonIcon,
  setOpenButtonIcon
}: FrameConfigInputsProps) => {
  return (
    <div className="space-y-6 mb-8 p-4 border border-gray-200 rounded-lg">
      <div className="space-y-2">
        <Label htmlFor="frame-url">Chat URL</Label>
        <Input
          id="frame-url"
          placeholder="https://your-chat-url.com"
          value={frameUrl}
          onChange={(e) => setFrameUrl(e.target.value)}
        />
        <p className="text-sm text-gray-500">URL of the chat page to be loaded in the iframe</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="frame-title">Chat Title</Label>
        <Input
          id="frame-title"
          placeholder="Chat Support"
          value={frameTitle}
          onChange={(e) => setFrameTitle(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="button-icon">Button Icon</Label>
          <Select value={buttonIcon} onValueChange={setButtonIcon}>
            <SelectTrigger id="button-icon">
              <SelectValue placeholder="Select an icon" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="message-circle">Message Circle</SelectItem>
              <SelectItem value="arrow-up">Arrow Up</SelectItem>
              <SelectItem value="arrow-down">Arrow Down</SelectItem>
              <SelectItem value="close">Close</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="open-button-icon">Open Button Icon</Label>
          <Select value={openButtonIcon} onValueChange={setOpenButtonIcon}>
            <SelectTrigger id="open-button-icon">
              <SelectValue placeholder="Select an icon" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="message-circle">Message Circle</SelectItem>
              <SelectItem value="arrow-up">Arrow Up</SelectItem>
              <SelectItem value="arrow-down">Arrow Down</SelectItem>
              <SelectItem value="close">Close</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FrameConfigInputs;
