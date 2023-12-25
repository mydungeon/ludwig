import React from "react";
import SiteSidebarProps from "./Site.types";
import "./Site.styles.scss";

export default function SiteSidebar({ children }: SiteSidebarProps) {
  return (
    <div className="siteSidebar" data-testid="siteSidebar">
      {children}
    </div>
  );
}
