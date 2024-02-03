import React from "react";
import { IconMenu, SIDE_MENUS } from "src/ui/features/Menus";
import HeaderSidebarLayout from "../HeaderSidebar";

export default function ProfileLayout() {
  return (
    <HeaderSidebarLayout>
      {SIDE_MENUS.map(({ items, role, title }, index) => (
        <IconMenu key={index} menuItems={items} role={role} title={title} />
      ))}
    </HeaderSidebarLayout>
  );
}
