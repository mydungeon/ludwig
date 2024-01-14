import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { Icon, Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";

export default function SourceCodeIcon() {
  return (
    <Tooltip
      direction={TooltipDirection.TOP}
      message="View my source code on Github"
    >
      <a
        href="https://github.com/mydungeon/ludwig"
        rel="noreferrer"
        target="_blank"
      >
        <Icon icon={faCode} />
      </a>
    </Tooltip>
  );
}
