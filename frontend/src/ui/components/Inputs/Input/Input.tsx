import React from "react";
import "./Input.styles.scss";
import ErrorMessage from "../../ErrorMessage";

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
  console.log(formState?.errors[name]?.message);
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
