<<<<<<< HEAD
import React, { Children, createElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProps from "./Form.types";
import Wrapper from "src/ui/components/Wrapper";
import "./Form.styles.scss";
// This component was taken from: https://react-hook-form.com/advanced-usage#SmartFormComponent
export default function Form({
  defaultValues,
  classNames,
  children,
  formName,
  onSubmit,
  validation,
}: FormProps) {
  const methods = useForm({ defaultValues, resolver: yupResolver(validation) });
  const { handleSubmit } = methods;

  return (
    <Wrapper headerText={formName}>
      <form className={`form ${classNames}`} onSubmit={handleSubmit(onSubmit)}>
        {Children.map(children, (child) => {
          return child?.props.name
            ? createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  formState: methods.formState,
                  key: child.props.name,
                },
              })
            : child;
        })}
      </form>
    </Wrapper>
=======
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
>>>>>>> 6e7f044 (massive amount of  boilerplate)
  );
}
