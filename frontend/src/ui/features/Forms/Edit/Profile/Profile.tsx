import React from "react";
import { useAppSelector } from "src/redux/store";
import { Redirect, usePreloader, useRedirect } from "src/hooks";
import { useUpdateMeMutation } from "src/redux/api/user.api";
import { Form, FormFooter, Input, SiteLink, Wrapper } from "src/ui/components";
import { SubmitButton } from "src/ui/features/Buttons";
import { validationSchema } from "./Profile.schema";
import "./Profile.styles.scss";

export default function EditProfileForm() {
  const defaultValues = useAppSelector((state) => state.userState.user);
  const [updateMe, { isLoading, isSuccess }] = useUpdateMeMutation();
  const isPreloaderSuccess = isLoading && !isSuccess;
  const isRedirectSuccess = !isLoading && isSuccess;
  const onSubmit = (data: any) => updateMe(data);

  usePreloader(isPreloaderSuccess);
  useRedirect(isRedirectSuccess, Redirect.PROFILE);

  return defaultValues ? (
    <Wrapper classNames="editProfile" dataTestId="editProfileForm">
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
