import React from "react";
import ProfileMenuItem from "./components";
import "./IconMenu.styles.scss";
import IconMenuItemProps from "./components/IconMenuItem/IconMenuItem.types";

export default function IconMenu({
  title,
  menuItems,
}: {
  title: string;
  menuItems: IconMenuItemProps[];
}) {
  return (
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
  );
}
