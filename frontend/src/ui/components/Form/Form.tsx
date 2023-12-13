import React, { Children, createElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProps from "./Form.types";
import "./Form.styles.scss";

export default function Form({
  defaultValues,
  children,
  onSubmit,
  validation,
}: FormProps) {
  const methods = useForm({ defaultValues, resolver: yupResolver(validation) });
  const { handleSubmit } = methods;

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
  );
}
