import React from "react";
import { Redirect, usePreloader, useRedirect, useToggle } from "src/hooks";
import { useChangePasswordMutation } from "src/redux/api/auth.api";
import { Form, FormFooter, Input, SiteLink, Wrapper } from "src/ui/components";
import { SubmitButton } from "src/ui/features/Buttons";
import { TogglePasswordIcon } from "src/ui/features/Icons";
import { defaultValues, validationSchema } from "./ChangePassword.schema";
import "./ChangePassword.styles.scss";

export default function ChangePasswordForm() {
  const [changePasword, { isLoading, isSuccess }] = useChangePasswordMutation();
  const { handleSetToggle, toggle } = useToggle(true);
  const togglePasswordType = toggle ? "password" : "text";
  const isPreloaderSuccess = isLoading && !isSuccess;
  const isRedirectSuccess = !isLoading && isSuccess;
  const onSubmit = (data: any) => changePasword(data);
  usePreloader(isPreloaderSuccess);
  useRedirect(isRedirectSuccess, Redirect.LOGIN);

  return (
    <Wrapper classNames="changePassword" dataTestId="changePasswordForm">
      <Form
        classNames="changePassword"
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        validation={validationSchema}
      >
        <Input
          name="currentPassword"
          placeholder="Current Password"
          inputType={togglePasswordType}
        />
        <TogglePasswordIcon callback={handleSetToggle} toggle={toggle} />
        <Input
          name="password"
          placeholder="New Password"
          inputType={togglePasswordType}
        />
        <Input
          name="passwordConfirm"
          placeholder="Confirm New Password"
          inputType={togglePasswordType}
        />
        <FormFooter classNames="form">
          <div>
            <SiteLink
              classNames="link"
              linkText="Cancel"
              destination={Redirect.PROFILE}
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
