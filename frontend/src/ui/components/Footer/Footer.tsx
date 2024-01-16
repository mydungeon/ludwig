import React from "react";
import FooterProps from "./Footer.types";
import "./Footer.styles.scss";

export default function Footer({ children, classNames }: FooterProps) {
  const className = classNames ? `footer ${classNames}` : "footer";
  return (
    <div className={className} data-testid="footer">
      {children}
    </div>
  );
}
