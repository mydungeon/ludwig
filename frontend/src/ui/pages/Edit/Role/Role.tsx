import React from "react";
import { EditRoleForm } from "src/ui/features/Forms/Edit";
import "./Role.styles.scss";

export default function Role() {
  return (
    <div className="role" data-testid="role">
      <EditRoleForm />
    </div>
  );
}
