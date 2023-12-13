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
