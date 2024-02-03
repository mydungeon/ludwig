import React from "react";
import { Redirect, usePreloader, useRedirect } from "src/hooks";
import { useUpdateMeMutation } from "src/redux/api/user.api";
import { Wrapper } from "src/ui/components";
import { Form } from "src/ui/components";
import { Input } from "src/ui/components";
import { FormFooter } from "src/ui/components/Form/components";
import { SubmitButton } from "src/ui/features/Buttons";
import { useAppSelector } from "src/redux/store";
import { SiteLink } from "src/ui/components";
import { validationSchema } from "./ChangePassword.schema";
import "./ChangePassword.styles.scss";

export default function ChangePasswordForm() {
  const defaultValues = useAppSelector((state) => state.userState.user);
  const [updateMe, { isLoading, isSuccess }] = useUpdateMeMutation();
  const isPreloaderSuccess = isLoading && !isSuccess;
  const isRedirectSuccess = !isLoading && isSuccess;
  const onSubmit = (data: any) => updateMe(data);

  usePreloader(isPreloaderSuccess);
  useRedirect(isRedirectSuccess, Redirect.PROFILE);

  return defaultValues ? (
    <Wrapper classNames="changePassword" dataTestId="changePasswordForm">
      <div>Edit Profile</div>
      <Form
        classNames="updateUser"
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        validation={validationSchema}
      >
        <Input name="name" inputType="text" />
        <Input name="email" inputType="email" />
        <FormFooter classNames="form">
          <div>
            <SiteLink
              classNames="link"
              linkText="Cancel"
              destination={Redirect.PROFILE}
            />
          </div>
          <div>
            <SubmitButton buttonText="Update" classNames="updateUser" />
          </div>
        </FormFooter>
      </Form>
    </Wrapper>
  ) : null;
}
