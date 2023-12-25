import React from "react";
import { LogoutButton } from "src/ui/features/Buttons";
import SiteLink from "src/ui/elements/SiteLink";
import { UserRoles } from "src/ui/features/User/User.types";
import Avatar from "src/ui/components/Avatar";
import "./LoggedIn.styles.scss";

export default function LoggedInMenu({ ...user }) {
  return (
    <div className="loggedInMenu" data-testid="loggedInMenu">
      <LogoutButton />
      {user?.role === UserRoles.ADMIN && (
        <SiteLink classNames="button" linkText="Admin" destination="/admin" />
      )}
      <Avatar destination="/profile" userName={user?.name} />
    </div>
  );
}
