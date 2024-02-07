import React from "react";
import { Page } from "src/ui/components";
import { EditRoleForm } from "src/ui/features/Forms";
import "./Role.styles.scss";

export default function EditRolePage() {
  return (
    <Page pageTitle="Edit Role">
      <EditRoleForm />
    </Page>
  );
}
