import React from "react";
import { Sidebar } from "src/ui/components";
import ProfileSideMenu from "src/ui/features/Menus/Profile";

export default function SiteSidebar() {
  return (
    <Sidebar>
      <ProfileSideMenu />
    </Sidebar>
  );
}
