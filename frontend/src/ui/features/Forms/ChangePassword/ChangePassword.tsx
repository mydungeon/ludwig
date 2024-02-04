import React from "react";
import { Redirect, usePreloader, useRedirect } from "src/hooks";
import { useChangePasswordMutation } from "src/redux/api/auth.api";
import { Wrapper } from "src/ui/components";
import { Form } from "src/ui/components";
import { Input } from "src/ui/components";
import { FormFooter } from "src/ui/components/Form/components";
import { SubmitButton } from "src/ui/features/Buttons";
import { SiteLink } from "src/ui/components";
import { defaultValues, validationSchema } from "./ChangePassword.schema";
import "./ChangePassword.styles.scss";

export default function ChangePasswordForm() {
  const [changePasword, { isLoading, isSuccess }] = useChangePasswordMutation();
  const isPreloaderSuccess = isLoading && !isSuccess;
  const isRedirectSuccess = !isLoading && isSuccess;
  const onSubmit = (data: any) => changePasword(data);
  console.log("usePreloader");
  usePreloader(isPreloaderSuccess);
  console.log("usePreloader");
  useRedirect(isRedirectSuccess, Redirect.LOGIN);

  return (
    <Wrapper classNames="changePassword" dataTestId="changePasswordForm">
      <div>Change Password</div>
      <Form
        classNames="updateUser"
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        validation={validationSchema}
      >
        <Input name="currentPassword" inputType="password" />
        <Input name="password" inputType="password" />
        <Input name="passwordConfirm" inputType="password" />
        <FormFooter classNames="form">
          <div>
            <SiteLink
              classNames="link"
              linkText="Cancel"
              destination={Redirect.LOGIN}
            />
          </div>
          <div>
            <SubmitButton
              buttonText="Change Password"
              classNames="updateUser"
            />
          </div>
        </FormFooter>
      </Form>
    </Wrapper>
  );
}
