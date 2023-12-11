import React from "react";
import FormSubmitButtonProps from "./FormSubmitButton.types";
import "./FormSubmitButton.styles.scss";

export default function FormSubmitButton({
  buttonText,
  classNames,
}: FormSubmitButtonProps) {
  return (
    <button
      className={`formSubmitButton ${classNames}`}
      data-testid="formSubmitButton"
    >
      {buttonText}
    </button>
  );
}
