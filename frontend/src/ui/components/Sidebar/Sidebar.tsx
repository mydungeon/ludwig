import React from "react";
import { SidebarToggleIcon } from "src/ui/features/Icons";
import SidebarProps from "./Sidebar.types";
import useToggle from "src/hooks/useToggle";
import "./Sidebar.styles.scss";

export default function Sidebar({ children }: SidebarProps) {
  const { handleSetToggle, toggle } = useToggle(true);

  return (
    <div className={toggle ? "sidebar show" : "sidebar"} data-testid="sidebar">
      {toggle ? children : null}
      <SidebarToggleIcon callback={handleSetToggle} toggle={toggle} />
    </div>
  );
}
