import React from "react";
import Page from "src/ui/components/Page";
import LoginForm from "src/ui/components/Forms/Login";
import "./Login.styles.scss";

export default function LoginPage() {
  return (
    <Page classNames="login" data-testid="loginPage">
      <LoginForm />
    </Page>
  );
}
