import React from "react";
import ButtonProps from "./Button.types";
import "./Button.styles.scss";

export default function Button({
  buttonText,
  children,
  classNames,
  onClick,
}: ButtonProps) {
  const onClickHandler = async () => {
    onClick();
  };

  return (
    <button
      className={`button ${classNames}`}
      data-testid={`button`}
      onClick={onClickHandler}
    >
      {children && <span>{children}</span>}
      <span>{buttonText}</span>
    </button>
  );
}
