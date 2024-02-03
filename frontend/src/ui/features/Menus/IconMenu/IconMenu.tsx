import React from "react";
import ProfileMenuItem from "./components";
import "./IconMenu.styles.scss";
import IconMenuItemProps from "./components/IconMenuItem/IconMenuItem.types";
import { useAuth } from "src/hooks";

export default function IconMenu({
  menuItems,
  role,
  title,
}: {
  menuItems: IconMenuItemProps[];
  role: string;
  title: string;
}) {
  const { isAuthorized } = useAuth(role);
  return isAuthorized ? (
    <div className="menu profile" data-testid="profile">
      <h3>{title}</h3>
      <div className="iconMenu">
        {menuItems.map(({ icon, roles, text, to }, index) => (
          <ProfileMenuItem
            key={index}
            icon={icon}
            roles={roles}
            text={text}
            to={to}
          />
        ))}
      </div>
    </div>
  ) : null;
}
