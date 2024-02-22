import React from "react";
import { useLocation } from "react-router-dom";
import { useToggle, Redirect, useRedirect } from "src/hooks";
import { useLoginUserMutation } from "src/redux/api/auth.api";
import {
  Form,
  FormFooter,
  FORM_NAMES,
  Input,
  SiteLink,
  Wrapper,
} from "src/ui/components";
import { SubmitButton } from "src/ui/features/Buttons";
import { TogglePasswordIcon } from "src/ui/features/Icons";
import { defaultValues, validationSchema } from "./Login.schema";

interface LocationState {
  from: string;
}

export default function LoginForm() {
  const location = useLocation();
  const [loginUser, { isSuccess }] = useLoginUserMutation();
  const { handleSetToggle, toggle } = useToggle(true);
  const onSubmit = (data: any) => loginUser(data);
  const { from } = (location?.state as LocationState) || {};
  useRedirect(isSuccess, from || Redirect.PROFILE);

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
        <Input name="email" placeholder="Email Address" inputType="email" />
        <Input
          name="password"
          placeholder="Password"
          inputType={toggle ? "password" : "text"}
        />
        <TogglePasswordIcon callback={handleSetToggle} toggle={toggle} />
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
