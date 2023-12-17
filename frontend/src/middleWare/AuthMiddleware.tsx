import React from "react";
import { useCookies } from "react-cookie";
import { userApi } from "../redux/api/userApi";
import usePreloader from "src/hooks/usePreloader";

type IAuthMiddleware = {
  children: React.ReactElement;
};

const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
  const [cookies] = useCookies(["logged_in"]);
  const { isLoading } = userApi.endpoints.getMe.useQuery(null, {
    skip: !cookies.logged_in,
  });

  usePreloader(isLoading);

  return children;
};

export default AuthMiddleware;
