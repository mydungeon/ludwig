import React from "react";
import {
  faCircleChevronUp,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import IconsProps from "src/ui/features/Icons/Icons.types";
import "./Maximize.styles.scss";

export default function MaximizeChatIcon({ callback, toggle }: IconsProps) {
  return (
    <Tooltip message="Maximize Chat" direction={TooltipDirection.BOTTOM}>
      <Icon
        classNames="maximizeChat"
        handleClick={callback}
        icon={toggle ? faCircleChevronDown : faCircleChevronUp}
        size="xl"
      />
    </Tooltip>
  );
}
