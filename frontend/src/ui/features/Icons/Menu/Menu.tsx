import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import IconsProps from "../Icons.types";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import "./Menu.styles.scss";

export default function MenuIcon({ callback }: IconsProps) {
  return (
    <Tooltip message="Open Menu" direction={TooltipDirection.LEFT}>
      <Icon
        classNames="menuIcon"
        icon={faBars}
        handleClick={callback}
        size="2x"
      />
    </Tooltip>
  );
}
