import React from "react";
import { Link } from "react-router-dom";
import SiteMenuItemProps from "./SiteMenuItem.types";
import { useAuth } from "src/hooks";
import "./SiteMenuItem.styles.scss";

export default function SiteMenuItem({
  to,
  href,
  name,
  roles,
}: SiteMenuItemProps) {
  const { isAuthorized } = useAuth(roles);
  if (!isAuthorized) return null;
  return to ? (
    <div className="siteMenuItem" key={to}>
      <Link to={to}>{name}</Link>
    </div>
  ) : (
    <div className="siteMenuItem" key={href}>
      <a href={href}>{name}</a>
    </div>
  );
}
