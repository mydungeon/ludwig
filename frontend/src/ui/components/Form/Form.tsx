import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProps from "./Form.types";
import { useRegisterUserMutation } from "../../../redux/api/authApi";
import "./Form.styles.scss";
import { Inputs, validationSchema } from "./Form.schema";

export default function Form({ children }: FormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();
  const onSubmit: SubmitHandler<Inputs> = (data) => registerUser(data);
  console.log("errors", errors);
  return (
    <form className="form" data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      {/* {errors.name && <span>This field is required</span>}
      {errors.email && <span>This field is required</span>}
      {errors.password && <span>This field is required</span>}
      {errors.passwordConfirm && <span>This field is required</span>} */}

      <input placeholder="name" {...register("name")} />
      <input placeholder="email" {...register("email")} />
      <input placeholder="password" type="password" {...register("password")} />
      <input
        placeholder="confirm password"
        type="password"
        {...register("passwordConfirm")}
      />
      <input type="submit" />
    </form>
  );
}
