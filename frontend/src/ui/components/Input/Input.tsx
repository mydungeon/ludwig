import React from "react";
import ErrorMessage from "src/ui/components/ErrorMessage";
import { InputProps } from "./Input.types";
import "./Input.styles.scss";

export default function Input({
  formState,
  inputType,
  name,
  register,
  ...rest
}: InputProps) {
  return register ? (
    <>
      <input
        className="input"
        placeholder={name}
        type={inputType}
        {...register(name)}
        {...rest}
      />
      <ErrorMessage errorText={formState?.errors[name]?.message} />
    </>
  ) : null;
}
