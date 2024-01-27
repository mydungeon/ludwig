import React, { useState } from "react";
import { SidebarToggleIcon } from "src/ui/features/Icons";
import SidebarProps from "./Sidebar.types";
import "./Sidebar.styles.scss";

export default function Sidebar({ children }: SidebarProps) {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <div className={toggle ? "sidebar show" : "sidebar"} data-testid="sidebar">
      {toggle ? children : null}
      <SidebarToggleIcon callback={handleClick} toggle={toggle} />
    </div>
  );
}
