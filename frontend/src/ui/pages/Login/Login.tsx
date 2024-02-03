import React from "react";
import { Page } from "src/ui/components";
import { LoginForm } from "src/ui/features/Forms";
import "./Login.styles.scss";

export default function LoginPage() {
  return (
    <Page classNames="login">
      <LoginForm />
    </Page>
  );
}
