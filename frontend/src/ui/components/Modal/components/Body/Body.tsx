import React from "react";
import ModalBodyProps from "./Body.types";

export default function ModalBody({ children }: ModalBodyProps) {
  return (
    <div className="modalBody" data-testid="modalBody">
      {children}
    </div>
  );
}
