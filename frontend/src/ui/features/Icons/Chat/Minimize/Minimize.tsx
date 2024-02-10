import React from "react";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import IconsProps from "src/ui/features/Icons/Icons.types";
import "./Minimize.styles.scss";

export default function MinimizeChatIcon({ callback }: IconsProps) {
  return (
    <Tooltip message="Minimize Chat" direction={TooltipDirection.BOTTOM}>
      <Icon
        classNames="minimizeChat"
        handleClick={callback}
        icon={faCircleMinus}
        size="xl"
      />
    </Tooltip>
  );
}
