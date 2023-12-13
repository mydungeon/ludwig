import React from "react";
import RegisterPageProps from "./RegisterPage.types";
import "./RegisterPage.styles.scss";
import RegisterForm from "../../components/Forms/Register";

export default function RegisterPage({ children }: RegisterPageProps) {
  return (
    <div className="registerpage" data-testid="registerpage">
      <RegisterForm />
    </div>
  );
}
