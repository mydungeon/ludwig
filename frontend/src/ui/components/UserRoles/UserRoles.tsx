import React from "react";
import "./UserRoles.styles.scss";
import Badge from "../Badge";

export default function UserRoles({ roles }: { roles: string[] }) {
  return (
    <div className="userRoles" data-testid="userRoles">
      {roles?.map((role, index) => (
        <Badge key={index} text={role} />
      ))}
    </div>
  );
}
