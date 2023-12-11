import React from "react";
import ButtonProps from "./Button.types";
import "./Button.styles.scss";

export default function Button({
  buttonText,
  classNames,
  onClick,
}: ButtonProps) {
  const onClickHandler = async () => {
    onClick();
  };

  return (
    <button
      className={`button ${classNames}`}
      data-testid="button"
      onClick={onClickHandler}
    >
      {buttonText}
    </button>
  );
}
