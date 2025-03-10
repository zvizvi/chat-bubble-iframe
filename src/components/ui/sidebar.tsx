
import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  links?: {
    title: string;
    href: string;
    icon?: React.ReactNode;
    variant?: "default" | "ghost";
  }[];
  isCollapsed?: boolean;
}

export function Sidebar({
  className,
  links,
  isCollapsed = false,
  ...props
}: SidebarProps) {
  return (
    <div
      className={cn(
        "flex flex-col h-full bg-background text-foreground",
        className
      )}
      {...props}
    >
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {links?.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.href}
                className={cn(
                  buttonVariants({
                    variant: link.variant || "ghost",
                    size: "sm",
                  }),
                  "justify-start"
                )}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {!isCollapsed && <span>{link.title}</span>}
              </a>
              {index < links.length - 1 && <div className="h-px bg-border my-1" />}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
