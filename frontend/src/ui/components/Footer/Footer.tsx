import React from "react";
import FooterProps from "./Footer.types";
import { Logo } from "src/ui/components";
import { getCopyright } from "./Footer.utils";
import { SourceCodeIcon } from "src/ui/features/Icons";
import "./Footer.styles.scss";

export default function Footer({ children }: FooterProps) {
  return (
    <div className="footer" data-testid="footer">
      <div>
        <Logo classNames="small" />
      </div>
      <div>
        <SourceCodeIcon />
      </div>
      <div>
        <span>{getCopyright()}</span>
      </div>
    </div>
  );
}
