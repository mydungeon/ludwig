import React from "react";
import { EditRoleForm } from "src/ui/features/Forms/Edit";
import "./Role.styles.scss";
import Page from "src/ui/components/Page";

export default function EditRolePage() {
  return (
    <Page>
      <EditRoleForm />
    </Page>
  );
}
