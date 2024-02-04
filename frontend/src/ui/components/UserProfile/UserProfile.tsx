import React from "react";
import "./UserProfile.styles.scss";
import { UserDetails, UserPfp } from "src/ui/components";
import UserRoles from "../UserRoles";

export default function UserProfile() {
  return (
    <div className="userprofile" data-testid="userprofile">
      <UserPfp />
      <UserRoles />
      <UserDetails />
    </div>
  );
}
