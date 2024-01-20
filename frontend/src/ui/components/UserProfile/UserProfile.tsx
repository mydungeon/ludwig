import React from "react";
import UserProfileProps from "./UserProfile.types";
import "./UserProfile.styles.scss";
import { UserDetails, UserPfp } from "src/ui/components";

export default function UserProfile({ children }: UserProfileProps) {
  return (
    <div className="userprofile" data-testid="userprofile">
      <UserPfp />
      <UserDetails />
    </div>
  );
}
