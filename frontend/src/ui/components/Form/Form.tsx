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
>>>>>>> 6e7f044 (massive amount of  boilerplate)
  );
}
