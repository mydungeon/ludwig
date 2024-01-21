import React from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import IconsProps from "src/ui/features/Icons/Icons.types";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import "./Send.styles.scss";

export default function SendIcon({ callback }: IconsProps) {
  return (
    <Tooltip
      classNames="sendIcon"
      message="Send Message"
      direction={TooltipDirection.TOP}
    >
      <Icon
        classNames="sendIcon"
        icon={faArrowUp}
        handleClick={callback}
        size="2x"
      />
    </Tooltip>
  );
}
