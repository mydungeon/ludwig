import React from "react";
import { Link } from "react-router-dom";
import ProfileMenuItemProps from "./ProfileMenuItem.types";
import { Icon } from "src/ui/components";
import "./ProfileMenuItem.styles.scss";
import { useAuth } from "src/hooks";

export default function ProfileMenuItem({
  icon,
  text,
  to,
  roles,
}: ProfileMenuItemProps) {
  const { isAuthorized } = useAuth(roles);

  return isAuthorized ? (
    <div className="profileMenuItem" data-testid="profileMenuItem">
      <Icon icon={icon} />
      <Link to={to}>{text}</Link>
    </div>
  ) : null;
}
