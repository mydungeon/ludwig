import React from "react";
import { useCookies } from "react-cookie";
import { profileApi } from "src/redux/api/profile.api";
import usePreloader from "src/hooks/usePreloader";

type IAuthMiddleware = {
  children: React.ReactElement;
};

export default function AuthMiddleware({ children }: IAuthMiddleware) {
  const [cookies] = useCookies(["logged_in"]);
  const { isLoading } = profileApi.endpoints.getMe.useQuery(null, {
    skip: !cookies.logged_in,
  });

  usePreloader(isLoading);

  return children;
}
