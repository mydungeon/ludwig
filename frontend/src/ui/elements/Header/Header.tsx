import React from "react";
import HeaderProps from "./Header.types";
import "./Header.styles.scss";

export default function Header({
  children,
  classNames,
  dataTestId,
}: HeaderProps) {
  return (
    <div
      className={`header ${classNames}`}
      data-testid={`header-${dataTestId}`}
    >
      {children}
    </div>
  );
}
