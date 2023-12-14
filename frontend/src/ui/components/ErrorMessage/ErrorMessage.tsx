import React from "react";
import ErrorMessageProps from "./ErrorMessage.types";
import "./ErrorMessage.styles.scss";

export default function ErrorMessage({ errorText }: ErrorMessageProps) {
  return (
    <span className="error" data-testid="errormessage">
      {errorText}
    </span>
  );
}
