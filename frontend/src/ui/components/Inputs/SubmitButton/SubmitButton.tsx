import React from "react";
import SubmitButtonProps from "./SubmitButton.types";
import "./SubmitButton.styles.scss";

export default function SubmitButton({
  buttonText,
  classNames,
}: SubmitButtonProps) {
  return (
    <button className={`submit ${classNames}`} data-testid="submitButton">
      {buttonText}
    </button>
  );
}
