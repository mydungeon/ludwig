import React from "react";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import IconsProps from "src/ui/features/Icons/Icons.types";
import "./Open.styles.scss";

export default function OpenChatIcon({ callback }: IconsProps) {
  return (
    <Tooltip message="Open Chat" direction={TooltipDirection.LEFT}>
      <Icon icon={faMessage} handleClick={callback} size="xl" />
    </Tooltip>
  );
}
