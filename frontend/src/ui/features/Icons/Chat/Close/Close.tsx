import React from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import IconsProps from "src/ui/features/Icons/Icons.types";
import "./Close.styles.scss";

export default function CloseChatIcon({ callback }: IconsProps) {
  return (
    <Tooltip message="Close Chat" direction={TooltipDirection.BOTTOM}>
      <Icon
        classNames="closeChat"
        handleClick={callback}
        icon={faCircleXmark}
        size="xl"
      />
    </Tooltip>
  );
}
