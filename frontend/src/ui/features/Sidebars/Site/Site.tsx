import React from "react";
import Sidebar from "src/ui/components/Sidebar";
import SiteSidebarProps from "./Site.types";

export default function SiteSidebar({ children }: SiteSidebarProps) {
  return (
    <Sidebar>
      <div>
        <div>Sidebar Header</div>
        <div>Item One</div>
        <div>Item Two</div>
      </div>
    </Sidebar>
  );
}
