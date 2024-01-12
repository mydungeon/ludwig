import React from "react";
import { Redirect, useRedirect } from "src/hooks";
import { useLoginUserMutation } from "src/redux/api/auth.api";
import { Wrapper } from "src/ui/components";
import { Form } from "src/ui/components";
import { Input } from "src/ui/components";
import FormFooter from "src/ui/components/Form/components/Footer";
import { SiteLink } from "src/ui/components";
import { SubmitButton } from "src/ui/features/Buttons";
import { FORM_NAMES } from "src/ui/components/Form/Form.constants";
import { defaultValues, validationSchema } from "./Login.schema";

export default function LoginForm() {
  const [loginUser, { isSuccess }] = useLoginUserMutation();
  const onSubmit = (data: any) => loginUser(data);

  useRedirect(isSuccess, Redirect.PROFILE);

  return (
    <Wrapper
      classNames="login"
      dataTestId="loginForm"
      headerText={FORM_NAMES.LOGIN}
    >
      <Form
        classNames="login"
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        validation={validationSchema}
      >
        <Input name="email" inputType="email" />
        <Input name="password" inputType="password" />
        <FormFooter classNames="form">
          <div>
            <SiteLink
              classNames="link"
              linkText="Register"
              destination={Redirect.REGISTER}
            />
          </div>
          <div>
            <SubmitButton buttonText="Login" classNames="login" />
          </div>
        </FormFooter>
      </Form>
    </Wrapper>
  );
}
