import React, { useContext, useEffect } from "react";
import { AppContextType, AppContext } from "src/context/App";
import { useRegisterUserMutation } from "src/redux/api/authApi";
import Form from "src/ui/components/Form";
import Input from "src/ui/components/Inputs/Input";
import SubmitButton from "src/ui/components/Inputs/SubmitButton";
import { defaultValues, validationSchema } from "./Register.schema";
import { FORM_NAMES } from "src/ui/components/Form/Form.constants";

export default function RegisterForm() {
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();
  const { handleSetContext } = useContext<AppContextType>(AppContext);
  const onSubmit = (data: any) => registerUser(data);
  useEffect(() => {
    if (isLoading) {
      handleSetContext(true);
    } else {
      handleSetContext(false);
    }
  }, [isLoading, handleSetContext]);
  return (
    <Form
      classNames="register"
      defaultValues={defaultValues}
      formName={FORM_NAMES.REGISTER}
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
