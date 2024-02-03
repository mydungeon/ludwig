import React from "react";
import { Page } from "src/ui/components";
import { ChangePasswordForm } from "src/ui/features/Forms";
import "./ChangePassword.styles.scss";

export default function ChangePasswordPage() {
  return (
    <Page classNames="changePassword">
      <ChangePasswordForm />
    </Page>
  );
}
