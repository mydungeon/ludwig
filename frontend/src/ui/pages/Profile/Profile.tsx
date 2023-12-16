import React from "react";
import { useAppSelector } from "src/redux/store";
import ProfilePageProps from "./Profile.types";
import "./Profile.styles.scss";

export default function ProfilePage({ children, pageTitle }: ProfilePageProps) {
  const user = useAppSelector((state) => state.userState.user);

  return (
    <div className="profile" data-testid="profilePage">
      <div>{pageTitle}</div>
      <div className="user">
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
    </div>
  );
}
