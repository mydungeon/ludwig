import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/ui/elements/Button";
import { useLogoutUserMutation } from "src/redux/api/authApi";
import "./LogoutButton.styles.scss";

export default function LogoutButton() {
  const navigate = useNavigate();
  const [logoutUser, { isLoading, isSuccess }] = useLogoutUserMutation();

  useEffect(() => {
    if (isSuccess) {
      // window.location.href = '/login';
      navigate("/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  return (
    <Button
      buttonText="Logout"
      classNames="logout"
      data-testid="logoutButton"
      onClick={logoutUser}
    />
  );
}
