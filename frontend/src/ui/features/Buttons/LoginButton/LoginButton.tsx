import React from "react";
import LoginButtonProps from "./LoginButton.types";
import "./LoginButton.styles.scss";

export default function LoginButton({ children }: LoginButtonProps) {
  return (
    <div className="loginbutton" data-testid="loginbutton">
      {children}
    </div>
  );
}
