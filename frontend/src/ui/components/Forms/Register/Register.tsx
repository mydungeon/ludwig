import React from "react";
import { Redirect, usePreloader, useRedirect } from "src/hooks";
import { useRegisterUserMutation } from "src/redux/api/auth.api";
import Form from "src/ui/components/Form";
import Input from "src/ui/components/Inputs/Input";
import FormFooter from "src/ui/components/Form/components/Footer";
import SiteLink from "src/ui/elements/SiteLink";
import SubmitButton from "src/ui/components/Inputs/SubmitButton";
import { FORM_NAMES } from "src/ui/components/Form/Form.constants";
import { defaultValues, validationSchema } from "./Register.schema";

export default function RegisterForm() {
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();
  const isPreloaderSuccess = isLoading && !isSuccess;
  const isRedirectSuccess = !isLoading && isSuccess;
  const onSubmit = (data: any) => registerUser(data);

  usePreloader(isPreloaderSuccess);
  useRedirect(isRedirectSuccess, Redirect.LOGIN);

  return (
    <Form
      classNames="register"
      data-testid="registerForm"
      defaultValues={defaultValues}
      formName={FORM_NAMES.REGISTER}
      onSubmit={onSubmit}
      validation={validationSchema}
    >
      <Input name="name" inputType="text" />
      <Input name="email" inputType="email" />
      <Input name="password" inputType="password" />
      <Input name="passwordConfirm" inputType="password" />
      <FormFooter classNames="form">
        <div>
          <SiteLink classNames="link" linkText="Login" destination="/login" />
        </div>
        <div>
          <SubmitButton buttonText="Register" classNames="register" />
        </div>
      </FormFooter>
    </Form>
  );
}
