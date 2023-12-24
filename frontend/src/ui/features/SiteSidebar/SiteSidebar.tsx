import React from "react";
import SiteSidebarProps from "./SiteSidebar.types";
import "./SiteSidebar.styles.scss";

export default function SiteSidebar({ children }: SiteSidebarProps) {
  return (
    <div className="siteSidebar" data-testid="siteSidebar">
      <div>side bar</div>
      {children}
    </div>
  );
}
