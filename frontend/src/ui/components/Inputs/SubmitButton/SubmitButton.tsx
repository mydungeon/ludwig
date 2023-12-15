import React from "react";
import SubmitButtonProps from "./SubmitButton.types";
import "./SubmitButton.styles.scss";

export default function SubmitButton({
  buttonText,
  classNames,
}: SubmitButtonProps) {
  return (
<<<<<<< HEAD
    <button className={`submit ${classNames}`} data-testid="submitButton">
=======
    <button className={`submitButton ${classNames}`} data-testid="submitButton">
>>>>>>> c068606 (react hook form boilerplate completed - first pass)
      {buttonText}
    </button>
  );
}
