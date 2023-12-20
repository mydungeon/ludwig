import React from "react";
import { useCookies } from "react-cookie";
import { userApi } from "src/redux/api/userApi";
import usePreloader from "src/hooks/usePreloader";

type IAuthMiddleware = {
  children: React.ReactElement;
};

export default function AuthMiddleware({ children }: IAuthMiddleware) {
  const [cookies] = useCookies(["logged_in"]);
  const { isLoading } = userApi.endpoints.getMe.useQuery(null, {
    skip: !cookies.logged_in,
  });

  usePreloader(isLoading);

  return children;
}
