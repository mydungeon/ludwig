import React from "react";
import { useLogoutUserMutation } from "src/redux/api/authApi";
import { Redirect, usePreloader, useRedirect } from "src/hooks";
import Button from "src/ui/elements/Button";
import "./LogoutButton.styles.scss";

export default function LogoutButton() {
  const [logoutUser, { isLoading, isSuccess }] = useLogoutUserMutation();
  const isPreloaderSuccess = isLoading && !isSuccess;
  const isRedirectSuccess = !isLoading && isSuccess;

  usePreloader(isPreloaderSuccess);
  useRedirect(isRedirectSuccess, Redirect.LOGIN);

  return (
    <Button
      buttonText="Logout"
      classNames="logout"
      data-testid="logoutButton"
      onClick={logoutUser}
    />
  );
}
