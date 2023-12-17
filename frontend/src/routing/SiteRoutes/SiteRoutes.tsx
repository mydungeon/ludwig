import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "src/ui/features/Layout";
import AdminPage from "src/ui/pages/Admin";
import HomePage from "src/ui/pages/Home";
import LoginPage from "src/ui/pages/Login";
import ProfilePage from "src/ui/pages/Profile";
import RegisterPage from "src/ui/pages/Register";
import RequireUser from "src/ui/components/requireUser";
import UnauthorizePage from "src/ui/pages/Unauthorized";
import { UserRoles } from "src/ui/features/User/User.types";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* Private Route */}
        <Route
          element={
            <RequireUser allowedRoles={[UserRoles.USER, UserRoles.ADMIN]} />
          }
        >
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route element={<RequireUser allowedRoles={[UserRoles.ADMIN]} />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>
        <Route path="unauthorized" element={<UnauthorizePage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}
