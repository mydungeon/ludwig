import React from "react";
import { Redirect, usePreloader, useRedirect, useToggle } from "src/hooks";
import { useRegisterUserMutation } from "src/redux/api/auth.api";
import { Form, FormFooter, Input, SiteLink, Wrapper } from "src/ui/components";
import { FORM_NAMES } from "src/ui/components/Form/Form.constants";
import { SubmitButton } from "src/ui/features/Buttons";
import { defaultValues, validationSchema } from "./Register.schema";
import { TogglePasswordIcon } from "../../Icons";

export default function RegisterForm() {
  const [registerUser, { isLoading, isSuccess }] = useRegisterUserMutation();
  const { handleSetToggle, toggle } = useToggle(true);
  const togglePasswordType = toggle ? "password" : "text";
  const isPreloaderSuccess = isLoading && !isSuccess;
  const isRedirectSuccess = !isLoading && isSuccess;
  const onSubmit = (data: any) => registerUser(data);

  usePreloader(isPreloaderSuccess);
  useRedirect(isRedirectSuccess, Redirect.LOGIN);
  return (
    <Wrapper
      classNames="register"
      dataTestId="registerForm"
      headerText={FORM_NAMES.REGISTER}
    >
      <Form
        classNames="register"
        data-testid="registerForm"
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        validation={validationSchema}
      >
        <Input name="name" inputType="text" />
        <Input name="email" inputType="email" />
        <Input name="password" inputType={togglePasswordType} />
        <TogglePasswordIcon callback={handleSetToggle} toggle={toggle} />
        <Input name="passwordConfirm" inputType={togglePasswordType} />
        <FormFooter classNames="form">
          <div>
            <SiteLink classNames="link" linkText="Login" destination="/login" />
          </div>
          <div>
            <SubmitButton buttonText="Register" classNames="register" />
          </div>
        </FormFooter>
      </Form>
    </Wrapper>
  );
}
