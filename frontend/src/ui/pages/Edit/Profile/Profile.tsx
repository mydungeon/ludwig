import React from "react";
import { Page } from "src/ui/components";
import EditProfileForm from "src/ui/features/Forms/Edit/Profile";
import "./Profile.styles.scss";

export default function EditProfile() {
  return (
    <Page classNames="editProfile">
      <EditProfileForm />
    </Page>
  );
}
