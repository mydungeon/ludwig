import React from "react";
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
  console.log(formState?.errors[name]?.message);
  return (
    <>
      <input
        placeholder={name}
        type={inputType}
        {...register(name)}
        {...rest}
      />
      <span>{formState?.errors[name]?.message}</span>
    </>
  );
}
