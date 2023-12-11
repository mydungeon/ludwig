import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Layout from "./ui/features/Layout";
import ProfilePage from "./ui/pages/profile.page";
import HomePage from "./ui/pages/home.page";
import LoginPage from "./ui/pages/login.page";
import RegisterPage from "./ui/pages/register.page";
import UnauthorizePage from "./ui/pages/unauthorize.page";
import RequireUser from "./ui/components/requireUser";
import { ToastContainer } from "react-toastify";
import AdminPage from "./ui/pages/admin.page";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <CssBaseline />
      <ToastContainer />
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
    </>
  );
}

export default App;
