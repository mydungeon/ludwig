import React, { useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Icon from "src/ui/components/Icon";
import Tooltip from "src/ui/components/Tooltip";
import SidebarProps from "./Sidebar.types";
import "./Sidebar.styles.scss";

export default function Sidebar({ children }: SidebarProps) {
  const [show, setShow] = useState(true);
  const arrow = show ? faArrowLeft : faArrowRight;

  function handleClick() {
    setShow(!show);
  }

  return (
    <div
      className={show ? "sidebar show" : "sidebar"}
      data-testid="sidebar"
      onClick={handleClick}
    >
      {show ? children : null}
      <div className="sidebarToggle">
        <Tooltip id="sidebarArrow" message={show ? `close` : `open`}>
          <Icon icon={arrow} handleClick={handleClick} />
        </Tooltip>
      </div>
    </div>
  );
}
