import { HeaderLayout, HeaderlessLayout } from "src/ui/features/Layouts";
import Authorize from "src/ui/components/Authorize";
import AdminPage from "src/ui/pages/Admin";
import HomePage from "src/ui/pages/Home";
import LoginPage from "src/ui/pages/Login";
import ProfilePage from "src/ui/pages/Profile";
import RegisterPage from "src/ui/pages/Register";
import UnauthorizedPage from "src/ui/pages/Unauthorized";
import NotFoundPage from "src/ui/pages/NotFound";
import { UserRoles } from "src/ui/features/User/User.types";

export const ROUTING = [
  {
    key: "home-parent",
    path: "/",
    element: HeaderLayout,
    routes: [
      {
        key: "home",
        index: true,
        element: HomePage,
      },
      {
        key: "profile-parent",
        authorize: Authorize,
        roles: [UserRoles.USER, UserRoles.ADMIN],
        routes: [
          {
            key: "profile",
            path: "profile",
            element: ProfilePage,
          },
        ],
      },
      {
        key: "admin-parent",
        authorize: Authorize,
        roles: [UserRoles.ADMIN],
        routes: [
          {
            key: "admin",
            path: "admin",
            element: AdminPage,
          },
        ],
      },
      {
        key: "unauthorized",
        path: "unauthorized",
        element: UnauthorizedPage,
      },
      {
        key: "notFound",
        path: "*",
        element: NotFoundPage,
      },
    ],
  },
  {
    key: "home-parent",
    path: "/",
    element: HeaderlessLayout,
    routes: [
      {
        key: "login",
        path: "login",
        element: LoginPage,
      },
      {
        key: "register",
        path: "register",
        element: RegisterPage,
      },
    ],
  },
];
