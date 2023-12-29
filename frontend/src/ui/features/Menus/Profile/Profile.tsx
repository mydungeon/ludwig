import React from "react";
import "./Profile.styles.scss";
import { Link } from "react-router-dom";

export default function ProfileSideMenu() {
  return (
    <div className="menu profile" data-testid="profile">
      <h2>My Profile</h2>
      <div>
        <Link to="profile/edit">Edit</Link>
      </div>
    </div>
  );
}
