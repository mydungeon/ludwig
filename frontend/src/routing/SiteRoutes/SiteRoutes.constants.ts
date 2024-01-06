import {
  HeaderLayout,
  HeaderSidebarLayout,
  HeaderlessLayout,
} from "src/ui/features/Layouts";
import Authorize from "src/ui/components/Authorize";
import AdminPage from "src/ui/pages/Admin";
import HomePage from "src/ui/pages/Home";
import LoginPage from "src/ui/pages/Login";
import ProfilePage from "src/ui/pages/Profile";
import EditProfilePage from "src/ui/pages/Edit/Profile";
import EditRolePage from "src/ui/pages/Edit/Role";
import UsersPage from "src/ui/pages/Users";
import RegisterPage from "src/ui/pages/Register";
import UnauthorizedPage from "src/ui/pages/Unauthorized";
import NotFoundPage from "src/ui/pages/NotFound";
import { UserRoles } from "src/ui/features/User/User.types";

export const ROUTING = [
  {
    key: "headerLayout-parent",
    path: "/",
    element: HeaderLayout,
    routes: [
      {
        key: "home",
        index: true,
        element: HomePage,
      },
    ],
  },
  {
    key: "headerSidebarLayout-parent",
    path: "/",
    element: HeaderSidebarLayout,
    routes: [
      {
        key: "parent",
        authorize: Authorize,
        roles: [UserRoles.USER, UserRoles.ADMIN],
        routes: [
          {
            key: "profile",
            path: "profile",
            element: ProfilePage,
          },
          {
            key: "profile/edit",
            path: "profile/edit",
            element: EditProfilePage,
          },
          {
            key: "profile/role/edit",
            path: "profile/role/edit",
            element: EditRolePage,
          },
          {
            key: "users",
            path: "users",
            element: UsersPage,
          },
        ],
      },
      {
        key: "parent",
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
    key: "parent",
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
