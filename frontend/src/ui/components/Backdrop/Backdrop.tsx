import React from "react";
import BackdropProps from "./Backdrop.types";
import "./Backdrop.styles.scss";

export default function Backdrop({
  children,
  handleClick,
  show,
}: BackdropProps) {
  const className = handleClick ? "backdrop clickable" : "backdrop";
  return show ? (
    <div className={className} data-testid="backdrop" onClick={handleClick}>
      {children}
    </div>
  ) : null;
}
