import React from "react";
import "./Input.styles.scss";
<<<<<<< HEAD
<<<<<<< HEAD
import ErrorMessage from "../../ErrorMessage";
=======
>>>>>>> c068606 (react hook form boilerplate completed - first pass)
=======
import ErrorMessage from "../../ErrorMessage";
>>>>>>> 8e50453 (style inputs, add preloader in progress)

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
<<<<<<< HEAD
        className="input"
=======
>>>>>>> c068606 (react hook form boilerplate completed - first pass)
=======
        className="input"
>>>>>>> 8e50453 (style inputs, add preloader in progress)
        placeholder={name}
        type={inputType}
        {...register(name)}
        {...rest}
      />
<<<<<<< HEAD
<<<<<<< HEAD
      <ErrorMessage errorText={formState?.errors[name]?.message} />
=======
      <span>{formState?.errors[name]?.message}</span>
>>>>>>> c068606 (react hook form boilerplate completed - first pass)
=======
      <ErrorMessage errorText={formState?.errors[name]?.message} />
>>>>>>> 8e50453 (style inputs, add preloader in progress)
    </>
  );
}
