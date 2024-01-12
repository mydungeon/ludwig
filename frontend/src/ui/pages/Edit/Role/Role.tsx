import React from "react";
import { EditRoleForm } from "src/ui/features/Forms/Edit";
import { Page } from "src/ui/components";
import "./Role.styles.scss";

export default function EditRolePage() {
  return (
    <Page>
      <EditRoleForm />
    </Page>
  );
}
