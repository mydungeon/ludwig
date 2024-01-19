import React from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";

export default function MoreIcon() {
  return (
    <div className="moreIcon">
      <Tooltip message="Upload File" direction={TooltipDirection.RIGHT}>
        <Icon classNames="moreIcon" icon={faEllipsis} />
      </Tooltip>
    </div>
  );
}
