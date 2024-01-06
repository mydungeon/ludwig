import React from "react";
import { Redirect, usePreloader, useRedirect } from "src/hooks";
import { useUpdateMeMutation } from "src/redux/api/user.api";
import Wrapper from "src/ui/components/Wrapper";
import Form from "src/ui/components/Form";
import Input from "src/ui/components/Input";
import FormFooter from "src/ui/components/Form/components/Footer";
import { SubmitButton } from "src/ui/features/Buttons";
import { validationSchema } from "./Profile.schema";
import { useAppSelector } from "src/redux/store";
import SiteLink from "src/ui/elements/SiteLink";

export default function EditProfileForm() {
  const defaultValues = useAppSelector((state) => state.userState.user);
  const [updateMe, { isLoading, isSuccess }] = useUpdateMeMutation();
  const isPreloaderSuccess = isLoading && !isSuccess;
  const isRedirectSuccess = !isLoading && isSuccess;
  const onSubmit = (data: any) => updateMe(data);

  usePreloader(isPreloaderSuccess);
  useRedirect(isRedirectSuccess, Redirect.PROFILE);
  return (
    <Wrapper dataTestId="editProfileForm">
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
  );
}
