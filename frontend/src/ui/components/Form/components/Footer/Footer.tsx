import React from "react";
import FormFooterProps from "./Footer.types";
import "./Footer.styles.scss";

export default function FormFooter({ children, classNames }: FormFooterProps) {
  return (
    <div className={`footer ${classNames}`} data-testid="footer">
      {children}
    </div>
  );
}
