import React from "react";
import SubmitButtonProps from "./SubmitButton.types";
import "./SubmitButton.styles.scss";

export default function SubmitButton({
  buttonText,
  classNames,
}: SubmitButtonProps) {
  return (
    <button className={`submitButton ${classNames}`} data-testid="submitButton">
      {buttonText}
    </button>
  );
}
