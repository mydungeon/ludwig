import {
  ChatLayout,
  HeaderLayout,
  HeaderlessLayout,
  ProfileLayout,
} from "src/ui/features/Layouts";
import { Authorize } from "src/ui/components";
import { AdminPage } from "src/ui/pages";
import { CreditsPage } from "src/ui/pages";
import { DroogAiPage } from "src/ui/pages";
import { EditProfilePage } from "src/ui/pages";
import { EditRolePage } from "src/ui/pages";
import { FeedbackPage } from "src/ui/pages";
import { HomePage } from "src/ui/pages";
import { LoginPage } from "src/ui/pages";
import { MetricsPage } from "src/ui/pages";
import { NotFoundPage } from "src/ui/pages";
import { ProfilePage } from "src/ui/pages";
import { RegisterPage } from "src/ui/pages";
import { UnauthorizedPage } from "src/ui/pages";
import { UsersPage } from "src/ui/pages";
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
      {
        key: "credits",
        path: "credits",
        element: CreditsPage,
      },
    ],
  },
  {
    key: "headerSidebarLayout-parent",
    path: "/",
    element: ProfileLayout,
    routes: [
      {
        key: "parent",
        authorize: Authorize,
        roles: UserRoles.USER,
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
        ],
      },
      {
        key: "parent",
        authorize: Authorize,
        roles: UserRoles.ADMIN,
        routes: [
          {
            key: "admin",
            path: "admin",
            element: AdminPage,
          },
          {
            key: "users",
            path: "users",
            element: UsersPage,
          },
          {
            key: "metrics",
            path: "metrics",
            element: MetricsPage,
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
    element: HeaderLayout,
    routes: [
      {
        key: "parent",
        authorize: Authorize,
        roles: UserRoles.USER,
        routes: [
          {
            key: "feedback",
            path: "feedback",
            element: FeedbackPage,
          },
        ],
      },
    ],
  },
  {
    key: "parent",
    path: "/",
    element: ChatLayout,
    routes: [
      {
        key: "parent",
        authorize: Authorize,
        roles: UserRoles.USER,
        routes: [
          {
            key: "droogAi",
            path: "droogAi",
            element: DroogAiPage,
          },
        ],
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
