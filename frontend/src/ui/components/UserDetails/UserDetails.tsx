import React from "react";
import { useAppSelector } from "src/redux/store";
import "./UserDetails.styles.scss";

export default function UserDetails() {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <div className="userDetails" data-testid="userDetails">
      <div>
        <div>{user?._id}</div>
      </div>
      <div>
        <div>{user?.name}</div>
      </div>
      <div>
        <div>{user?.email}</div>
      </div>
      <div>
        <div>{user?.role}</div>
      </div>
    </div>
  );
}
