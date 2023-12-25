import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import TooltipProps from "./Tooltip.types";
import "./Tooltip.styles.scss";

export default function Tooltip({
  children,
  id,
  message,
  place,
}: TooltipProps) {
  return (
    <>
      <a className="tooltip" data-testid="tooltip" id={id}>
        {children}
      </a>
      <ReactTooltip
        anchorSelect={`#${id}`}
        className="siteTooltip"
        place={place}
      >
        <div>{message}</div>
      </ReactTooltip>
    </>
  );
}
