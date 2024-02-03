import React from "react";
import {
  ADMIN_MENU,
  IconMenu as AdminMenu,
  PROFILE_MENU,
  IconMenu as ProfileMenu,
} from "src/ui/features/Menus";
import HeaderSidebarLayout from "../HeaderSidebar";

export default function ProfileLayout() {
  return (
    <HeaderSidebarLayout>
      <>
        <ProfileMenu menuItems={PROFILE_MENU} title="Profile" />
        <AdminMenu menuItems={ADMIN_MENU} title="Admin" />
      </>
    </HeaderSidebarLayout>
  );
}
