import React from "react";
import ModalHeaderProps from "./Header.types";
import Icon from "src/ui/components/Icon";
import { ModalCloseIcon } from "src/ui/features/Icons";
import "./Header.styles.scss";

export default function ModalHeader({
  children,
  handleClick,
  icon,
  size = "sm",
}: ModalHeaderProps) {
  return (
    <div className="modalHeader" data-testid="modalHeader">
      <div className="leftSide">
        {icon && (
          <span>
            <Icon icon={icon} size={size} />
          </span>
        )}
        <span>{children}</span>
      </div>
      <ModalCloseIcon callback={handleClick} />
    </div>
  );
}
