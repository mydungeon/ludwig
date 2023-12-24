import React from "react";
import RegisterButtonProps from "./RegisterButton.types";
import "./RegisterButton.styles.scss";

export default function RegisterButton({ children }: RegisterButtonProps) {
  return (
    <div className="registerbutton" data-testid="registerbutton">
      {children}
    </div>
  );
}
