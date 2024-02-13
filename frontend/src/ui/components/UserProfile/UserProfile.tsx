import React from "react";
import { UserDetails, UserPfp, UserRoles } from "src/ui/components";

export default function UserProfile() {
  return (
    <div className="userprofile" data-testid="userprofile">
      <UserPfp />
      <UserRoles />
      <UserDetails />
    </div>
  );
}
