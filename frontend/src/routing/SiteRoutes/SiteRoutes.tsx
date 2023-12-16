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

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage pageTitle="Home" />} />
        {/* Private Route */}
        <Route element={<RequireUser allowedRoles={["user", "admin"]} />}>
          <Route path="profile" element={<ProfilePage pageTitle="Profile" />} />
        </Route>
        <Route element={<RequireUser allowedRoles={["admin"]} />}>
          <Route path="admin" element={<AdminPage pageTitle="Admin" />} />
        </Route>
        <Route
          path="unauthorized"
          element={<UnauthorizePage pageTitle="Unauthorized" />}
        />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}
