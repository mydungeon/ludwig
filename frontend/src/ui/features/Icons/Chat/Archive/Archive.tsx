import React from "react";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";

export default function ArchiveIcon() {
  return (
    <div className="archiveIcon">
      <Tooltip message="Upload File" direction={TooltipDirection.RIGHT}>
        <Icon classNames="archiveIcon" icon={faInbox} />
      </Tooltip>
    </div>
  );
}
