import React from "react";
import { useAppSelector } from "src/redux/store";
import "./UserDetails.styles.scss";

export default function UserDetails() {
  const user = useAppSelector((state) => state.profileState.profile);
  return (
    <div className="userDetails" data-testid="userDetails">
      <div>
        <div>Username:</div>
        <div>Email:</div>
        {(user?.rating === 0 || user?.rating) && <div>Rating:</div>}
      </div>
      <div>
        <div>{user?.name}</div>
        <div>{user?.email}</div>
        {(user?.rating === 0 || user?.rating) && <div>{user?.rating}</div>}
      </div>
    </div>
  );
}
