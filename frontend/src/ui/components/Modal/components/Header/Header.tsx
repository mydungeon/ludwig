import React from "react";
import ModalHeaderProps from "./Header.types";
import { ModalCloseIcon } from "src/ui/features/Icons";
import "./Header.styles.scss";

export default function ModalHeader({
  children,
  handleClick,
}: ModalHeaderProps) {
  return (
    <div className="modalHeader" data-testid="modalHeader">
      {children}
      <ModalCloseIcon callback={handleClick} />
    </div>
  );
}
