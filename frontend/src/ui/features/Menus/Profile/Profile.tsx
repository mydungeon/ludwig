import React from "react";
import { Link } from "react-router-dom";
import "./Profile.styles.scss";
import Icon from "src/ui/components/Icon";
import {
  faChartLine,
  faCircleUser,
  faShield,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfileSideMenu() {
  return (
    <div className="menu profile" data-testid="profile">
      <h2>My Links</h2>
      <div className="sub">
        <div>
          <Icon icon={faCircleUser} />
          <Link to="profile/edit">Edit Profile</Link>
        </div>
        <div>
          <Icon icon={faShield} />
          <Link to="profile/role/edit">Edit Role</Link>
        </div>
        <div>
          <Icon icon={faUsers} />
          <Link to="users">Users</Link>
        </div>
        <div>
          <Icon icon={faChartLine} />
          <Link to="metrics">Metrics</Link>
        </div>
      </div>
    </div>
  );
}
