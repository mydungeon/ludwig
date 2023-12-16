import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContextType, AppContext } from "src/context/App";
import Button from "src/ui/elements/Button";
import { useLogoutUserMutation } from "src/redux/api/authApi";
import "./LogoutButton.styles.scss";

export default function LogoutButton() {
  const navigate = useNavigate();
  const { handleSetContext } = useContext<AppContextType>(AppContext);

  const [logoutUser, { isLoading, isSuccess }] = useLogoutUserMutation();

  useEffect(() => {
    if (isSuccess) {
      // window.location.href = '/login';
      navigate("/login");
    }

    if (isLoading) {
      handleSetContext(true);
    } else {
      handleSetContext(false);
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
