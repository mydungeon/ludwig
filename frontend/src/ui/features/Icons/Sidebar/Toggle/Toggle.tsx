import React from "react";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import IconsProps from "src/ui/features/Icons/Icons.types";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import "./Toggle.styles.scss";

export default function SidebarToggleIcon({ callback, toggle }: IconsProps) {
  const icon = toggle ? faAnglesLeft : faAnglesRight;

  return (
    <div className="sidebarToggle">
      <Tooltip
        message={toggle ? `close` : `open`}
        direction={TooltipDirection.TOP_LEFT}
      >
        <Icon icon={icon} handleClick={callback} />
      </Tooltip>
    </div>
  );
}
