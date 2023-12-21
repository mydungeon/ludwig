import React from "react";
import ErrorMessage from "src/ui/components/ErrorMessage";
import "./Input.styles.scss";

export default function Input({
  inputType,
  name,
  register,
  formState,
  ...rest
}: {
  inputType: string;
  name: string;
  register?: any;
  formState?: any;
}) {
  return (
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
  );
}
