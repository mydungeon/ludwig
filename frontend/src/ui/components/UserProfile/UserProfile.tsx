import React from "react";
import "./UserProfile.styles.scss";
import { UserDetails, UserPfp } from "src/ui/components";

export default function UserProfile() {
  return (
    <div className="userprofile" data-testid="userprofile">
      <UserPfp />
      <UserDetails />
    </div>
  );
}
