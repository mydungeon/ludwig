import React, { useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Icon from "src/ui/components/Icon";
import SidebarProps from "./Sidebar.types";
import "./Sidebar.styles.scss";

export default function Sidebar({ children }: SidebarProps) {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  const arrow = show ? faArrowLeft : faArrowRight;
  return (
    <div
      className={show ? "sidebar show" : "sidebar"}
      data-testid="sidebar"
      onClick={handleClick}
    >
      {show ? children : null}
      <div>
        <Icon icon={arrow} handleClick={handleClick} size="2xl" />
      </div>
    </div>
  );
}
