import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Icon from "src/ui/components/Icon";
import ModalHeaderProps from "./Header.types";
import "./Header.styles.scss";

export default function ModalHeader({
  children,
  handleClick,
}: ModalHeaderProps) {
  return (
    <div className="modalHeader" data-testid="modalHeader">
      {children}
      <Icon icon={faXmark} handleClick={handleClick} size="2xl" />
    </div>
  );
}
