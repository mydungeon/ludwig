import React, { useState } from "react";
import TooltipProps from "./Tooltip.types";
import "./Tooltip.styles.scss";

export default function Tooltip({
  children,
  delay = 200,
  direction,
  message,
}: TooltipProps) {
  let timeout: any;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  return (
    <span
      className="tooltip"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && <div className={`tip ${direction || "top"}`}>{message}</div>}
    </span>
  );
}
