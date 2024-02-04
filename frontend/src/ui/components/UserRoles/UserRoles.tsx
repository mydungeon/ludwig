import React from "react";
import "./UserRoles.styles.scss";
import { useAppSelector } from "src/redux/store";
import Badge from "../Badge";

export default function UserRoles() {
  const userRoles = useAppSelector((state) => state.userState.user?.roles);
  return (
    <div className="userRoles" data-testid="userRoles">
      {userRoles?.map((role, index) => (
        <Badge key={index} text={role} />
      ))}
    </div>
  );
}
