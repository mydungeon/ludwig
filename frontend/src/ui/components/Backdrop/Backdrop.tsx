import React from "react";
import BackdropProps from "./Backdrop.types";
import "./Backdrop.styles.scss";

export default function Backdrop({ children, show }: BackdropProps) {
  return show ? (
    <div className="backdrop" data-testid="backdrop">
      {children}
    </div>
  ) : null;
}
