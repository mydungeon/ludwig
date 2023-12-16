import React from "react";
import { useLogoutUserMutation } from "src/redux/api/authApi";
import { usePreloader, useRedirect } from "src/hooks";
import Button from "src/ui/elements/Button";
import "./LogoutButton.styles.scss";

export default function LogoutButton() {
  const [logoutUser, { isLoading, isSuccess }] = useLogoutUserMutation();

  usePreloader(isLoading);
  useRedirect(isSuccess, "/login");

  return (
    <Button
      buttonText="Logout"
      classNames="logout"
      data-testid="logoutButton"
      onClick={logoutUser}
    />
  );
}
