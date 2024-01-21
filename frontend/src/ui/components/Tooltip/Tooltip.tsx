import React, { useState } from "react";
import TooltipProps from "./Tooltip.types";
import "./Tooltip.styles.scss";

export default function Tooltip({
  children,
  classNames,
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

  classNames = classNames ? `tooltip ${classNames}` : "tooltip";

  return (
    <span
      className={classNames}
      data-testid="tooltip"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && <div className={`tip ${direction || "top"}`}>{message}</div>}
    </span>
  );
}
