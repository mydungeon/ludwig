import React from "react";
import { LogoutButton } from "src/ui/components/Buttons";
import SiteLink from "src/ui/elements/SiteLink";
import { UserRoles } from "src/ui/features/User/User.types";
import Avatar from "../../../../components/Avatar";
import "./LoggedInMenu.styles.scss";

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
