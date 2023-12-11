import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormProps from "./Form.types";
import "./Form.styles.scss";

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function Form({ children }: FormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="form" data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      {errors.name && <span>This field is required</span>}
      {errors.email && <span>This field is required</span>}
      {errors.password && <span>This field is required</span>}
      {errors.passwordConfirm && <span>This field is required</span>}

      <input {...register("name", { required: true, maxLength: 20 })} />
      <input {...register("email", { pattern: /^[A-Za-z]+$/i })} />
      <input
        type="password"
        {...register("password", { required: true, min: 8, max: 32 })}
      />
      <input
        type="passwordConfirm"
        {...register("passwordConfirm", {
          required: true,
          min: 8,
          max: 32,
          validate: (val: string) => {
            if (watch("password") !== val) {
              return "Your passwords do no match";
            }
          },
        })}
      />
      <input type="submit" />
    </form>
  );
}
