import React from "react";
import "./Input.styles.scss";
<<<<<<< HEAD
import ErrorMessage from "../../ErrorMessage";
=======
>>>>>>> c068606 (react hook form boilerplate completed - first pass)

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
<<<<<<< HEAD
        className="input"
=======
>>>>>>> c068606 (react hook form boilerplate completed - first pass)
        placeholder={name}
        type={inputType}
        {...register(name)}
        {...rest}
      />
<<<<<<< HEAD
      <ErrorMessage errorText={formState?.errors[name]?.message} />
=======
      <span>{formState?.errors[name]?.message}</span>
>>>>>>> c068606 (react hook form boilerplate completed - first pass)
    </>
  );
}
