import React from "react";
import { UserDetails, UserPfp, UserRoles } from "src/ui/components";

export default function UserProfile({
  details,
}: {
  details: { email: string; name: string; rating: number; roles: string[] };
}) {
  return (
    <div className="userprofile" data-testid="userprofile">
      <UserPfp />
      <UserRoles roles={details.roles} />
      <UserDetails details={details} />
    </div>
  );
}
