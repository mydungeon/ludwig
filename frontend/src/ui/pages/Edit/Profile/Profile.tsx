import React from "react";
import { Page } from "src/ui/components";
import { EditProfileForm } from "src/ui/features/Forms";
import "./Profile.styles.scss";

export default function EditProfilePage() {
  return (
    <Page classNames="editProfile" pageTitle="Edit Profile">
      <EditProfileForm />
    </Page>
  );
}
