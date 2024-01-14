import React from "react";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import IconsProps from "src/ui/features/Icons/Icons.types";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";

export default function ThemeToggleIcon({ callback, toggle }: IconsProps) {
  const icon = toggle ? faToggleOn : faToggleOff;
  return (
    <div className="sidebarToggle">
      <Tooltip message="Switch Theme" direction={TooltipDirection.LEFT}>
        <Icon icon={icon} handleClick={callback} size="2xl" />
      </Tooltip>
    </div>
  );
}
