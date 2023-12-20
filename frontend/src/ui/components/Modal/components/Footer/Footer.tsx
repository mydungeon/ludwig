import React from "react";
import ModalFooterProps from "./Footer.types";

export default function ModalFooter({ children }: ModalFooterProps) {
  return (
    <div className="modalFooter" data-testid="modalFooter">
      {children}
    </div>
  );
}
