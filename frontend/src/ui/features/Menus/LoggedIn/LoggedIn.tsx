import React from "react";
import { LogoutButton } from "src/ui/features/Buttons";
import Avatar from "src/ui/components/Avatar";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import Tooltip from "src/ui/components/Tooltip";
import "./LoggedIn.styles.scss";

export default function LoggedInMenu({ ...user }) {
  return (
    <div className="loggedInMenu" data-testid="loggedInMenu">
      <LogoutButton />
      <Tooltip message={user?.name} direction={TooltipDirection.BOTTOM}>
        <Avatar destination="/profile" userName={user?.name} />
      </Tooltip>
    </div>
  );
}
