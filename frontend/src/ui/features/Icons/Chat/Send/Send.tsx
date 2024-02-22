import React from "react";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import IconsProps from "src/ui/features/Icons/Icons.types";

export default function SendChatIcon({ callback }: IconsProps) {
  return (
    <Tooltip message="Send" direction={TooltipDirection.LEFT}>
      <Icon icon={faReply} handleClick={callback} size="xl" />
    </Tooltip>
  );
}
