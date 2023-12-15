<<<<<<< HEAD
import React, { useEffect } from "react";
import { useRegisterUserMutation } from "src/redux/api/authApi";
import Form from "src/ui/components/Form";
import Input from "src/ui/components/Inputs/Input";
import SubmitButton from "src/ui/components/Inputs/SubmitButton";
import { defaultValues, validationSchema } from "./Register.schema";
import { FORM_NAMES } from "src/ui/components/Form/Form.constants";
import useToggle from "src/hooks/useToggleValue";

export default function RegisterForm() {
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();
  // const [value, toggleValue] = useToggle(false);
  const onSubmit = (data: any) => registerUser(data);
  // useEffect(() => {
  //   if (!isLoading) {
  //     toggleValue(false);
  //   } else {
  //     toggleValue(true);
  //   }
  // });
  return (
    <Form
      classNames="register"
      defaultValues={defaultValues}
      formName={FORM_NAMES.REGISTER}
=======
import React from "react";
import { useRegisterUserMutation } from "src/redux/api/authApi";
import Form from "src/ui/components/Form";
import Input from "src/ui/components/Inputs/Input";
import SubmitButton from "../../Inputs/SubmitButton/SubmitButton";
import { defaultValues, validationSchema } from "./Register.schema";
export default function RegisterForm() {
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();
  const onSubmit = (data: any) => registerUser(data);

  return (
    <Form
      defaultValues={defaultValues}
>>>>>>> c068606 (react hook form boilerplate completed - first pass)
      onSubmit={onSubmit}
      validation={validationSchema}
    >
      <Input name="name" inputType="text" />
      <Input name="email" inputType="email" />
      <Input name="password" inputType="password" />
      <Input name="passwordConfirm" inputType="password" />
      <SubmitButton buttonText="Register" />
    </Form>
  );
}
