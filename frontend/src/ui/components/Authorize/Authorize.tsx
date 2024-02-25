import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import usePreloader from "src/hooks/usePreloader";
import useAuth from "src/hooks/useAuth";

export default function Authorize({ allowedRoles }: { allowedRoles: string }) {
  const {
    isLoading,
    isAuthorized,
    isLoggedOut,
    isUnauthorized,
    location,
    userIdCookie,
  } = useAuth(allowedRoles);
  usePreloader(isLoading);

  if (isAuthorized && !isLoggedOut) {
    userIdCookie();
    return <Outlet />;
  } else if (isUnauthorized) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  } else if (isLoggedOut) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else return null;
}
