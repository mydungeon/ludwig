import React from "react";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";

export default function FileUploadIcon() {
  return (
    <div className="fileUploadIcon">
      <Tooltip message="Upload File" direction={TooltipDirection.TOP_LEFT}>
        <Icon classNames="fileUpload" icon={faPaperclip} size="lg" />
      </Tooltip>
    </div>
  );
}
