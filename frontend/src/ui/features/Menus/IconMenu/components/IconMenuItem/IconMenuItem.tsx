import React from "react";
import { Link } from "react-router-dom";
import IconMenuItemProps from "./IconMenuItem.types";
import { Icon } from "src/ui/components";
import "./IconMenuItem.styles.scss";
import { useAuth } from "src/hooks";

export default function IconMenuItem({
  icon,
  text,
  to,
  roles,
}: IconMenuItemProps) {
  const { isAuthorized } = useAuth(roles);

  return isAuthorized ? (
    <div className="iconMenuItem" data-testid="iconMenuItem">
      <Icon icon={icon} />
      <Link to={to}>{text}</Link>
    </div>
  ) : null;
}
