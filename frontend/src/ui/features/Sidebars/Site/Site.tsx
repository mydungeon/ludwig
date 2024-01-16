import React from "react";
import { Sidebar } from "src/ui/components";
import SiteSidebarProps from "./Site.types";

export default function SiteSidebar({ children }: SiteSidebarProps) {
  return <Sidebar>{children}</Sidebar>;
}
