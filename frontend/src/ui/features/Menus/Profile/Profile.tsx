import React from "react";
import { PROFILE_MENU, PROFILE_MENU_TITLE } from "./Profile.constants";
import ProfileMenuItem from "./components";
import "./Profile.styles.scss";

export default function ProfileSideMenu() {
  return (
    <div className="menu profile" data-testid="profile">
      <h2>{PROFILE_MENU_TITLE}</h2>
      <div className="sub">
        {PROFILE_MENU.map(({ icon, roles, text, to }, index) => (
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
