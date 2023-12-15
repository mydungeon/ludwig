<<<<<<< HEAD
<<<<<<< HEAD
import React, { Children, createElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProps from "./Form.types";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e50453 (style inputs, add preloader in progress)
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
=======
import React, { Children, createElement } from "react";
>>>>>>> c068606 (react hook form boilerplate completed - first pass)
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormProps from "./Form.types";
=======
import "./Form.styles.scss";
>>>>>>> 40702ef (update form style, update scss)

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
<<<<<<< HEAD
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
>>>>>>> 6e7f044 (massive amount of  boilerplate)
=======
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
>>>>>>> 8e50453 (style inputs, add preloader in progress)
  );
}
