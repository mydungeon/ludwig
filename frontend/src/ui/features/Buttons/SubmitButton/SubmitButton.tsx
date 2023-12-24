import React from "react";
import SubmitButtonProps from "./SubmitButton.types";

export default function SubmitButton({
  buttonText,
  classNames,
}: SubmitButtonProps) {
  return (
    <button className={classNames} data-testid="submitButton">
      {buttonText}
    </button>
  );
}
