import React from "react";
import { Link } from "react-router-dom";
import "./Profile.styles.scss";

export default function ProfileSideMenu() {
  return (
    <div className="menu profile" data-testid="profile">
      <h2>My Profile</h2>
      <div className="sub">
        <Link to="profile/edit">Edit Profile</Link>
        <Link to="profile/role/edit">Edit Role</Link>
      </div>
    </div>
  );
}
