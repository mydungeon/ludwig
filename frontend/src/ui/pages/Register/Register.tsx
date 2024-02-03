import React from "react";
import { Page } from "src/ui/components";
import { RegisterForm } from "src/ui/features/Forms";
import "./Register.styles.scss";

export default function RegisterPage() {
  return (
    <Page classNames="register">
      <RegisterForm />
    </Page>
  );
}
