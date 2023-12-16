import React from "react";
import { Redirect, usePreloader, useRedirect } from "src/hooks";
import { useLoginUserMutation } from "src/redux/api/authApi";
import Form from "src/ui/components/Form";
import Input from "src/ui/components/Inputs/Input";
import SubmitButton from "src/ui/components/Inputs/SubmitButton";
import { FORM_NAMES } from "src/ui/components/Form/Form.constants";
import { defaultValues, validationSchema } from "./Login.schema";

export default function LoginForm() {
  const [loginUser, { isLoading, isSuccess }] = useLoginUserMutation();
  const isPreloaderSuccess = isLoading && !isSuccess;
  const isRedirectSuccess = !isLoading && isSuccess;
  const onSubmit = (data: any) => loginUser(data);

  usePreloader(isPreloaderSuccess);
  useRedirect(isRedirectSuccess, Redirect.PROFILE);

  return (
    <Form
      classNames="login"
      defaultValues={defaultValues}
      formName={FORM_NAMES.LOGIN}
      onSubmit={onSubmit}
      validation={validationSchema}
    >
      <Input name="email" inputType="email" />
      <Input name="password" inputType="password" />
      <SubmitButton buttonText="Login" />
    </Form>
  );
}
