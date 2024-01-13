import React from "react";
import FooterProps from "./Footer.types";
import "./Footer.styles.scss";
import { Logo } from "src/ui/components";
import { getCopyright } from "./Footer.utils";

export default function Footer({ children }: FooterProps) {
  return (
    <div className="footer" data-testid="footer">
      <div>
        <Logo classNames="small" />
      </div>
      <div></div>
      <div>
        <span>{getCopyright()}</span>
      </div>
    </div>
  );
}
