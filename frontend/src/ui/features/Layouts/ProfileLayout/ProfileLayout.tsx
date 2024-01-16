import React from "react";
import { ProfileSideMenu } from "src/ui/features/Menus";
import HeaderSidebarLayout from "../HeaderSidebar";

export default function ProfileLayout() {
  return (
    <HeaderSidebarLayout>
      <ProfileSideMenu />
    </HeaderSidebarLayout>
  );
}
