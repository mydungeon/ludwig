import React from "react";
import Page from "src/ui/components/Page";
import RegisterForm from "../../components/Forms/Register";
import "./Register.styles.scss";

export default function RegisterPage() {
  return (
    <Page classNames="register" data-testid="registerpage">
      <RegisterForm />
    </Page>
  );
}
