import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "src/ui/features/Layout";
import ProfilePage from "src/ui/pages/profile.page";
import HomePage from "src/ui/pages/home.page";
import LoginPage from "src/ui/pages/login.page";
<<<<<<< HEAD
import RegisterPage from "src/ui/pages/Register";
=======
import RegisterPage from "src/ui/pages/RegisterPage";
>>>>>>> 6e7f044 (massive amount of  boilerplate)
// import RegisterPage from "src/ui/pages/register.page";
import UnauthorizePage from "src/ui/pages/unauthorize.page";
import RequireUser from "src/ui/components/requireUser";
import AdminPage from "src/ui/pages/admin.page";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* Private Route */}
        <Route element={<RequireUser allowedRoles={["user", "admin"]} />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route element={<RequireUser allowedRoles={["admin"]} />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>
        <Route path="unauthorized" element={<UnauthorizePage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}
