import React from "react";
import BackdropProps from "./Backdrop.types";
import "./Backdrop.styles.scss";

export default function Backdrop({ children, show }: BackdropProps) {
  console.log("backdrop", show);
  return show ? (
    <div className="backdrop" data-testid="backdrop">
      {children}
    </div>
  ) : null;
}
