import React, { Children, createElement, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProps from "./Form.types";
import "./Form.styles.scss";
// This component was taken from: https://react-hook-form.com/advanced-usage#SmartFormComponent

export default function Form({
  defaultValues,
  classNames,
  children,
  onSubmit,
  validation,
}: FormProps) {
  const methods = useForm({ defaultValues, resolver: yupResolver(validation) });
  const { formState } = methods;
  const {
    handleSubmit,
    formState: { isSubmitSuccessful },
    register,
    reset,
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      className={`form ${classNames}`}
      onSubmit={handleSubmit(onSubmit)}
      data-testid="form"
    >
      {Children.map(children, (child) => {
        return child?.props.name
          ? createElement(child.type, {
              ...{
                ...child.props,
                register,
                formState,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
}
