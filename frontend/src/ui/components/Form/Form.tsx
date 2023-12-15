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
  );
}
