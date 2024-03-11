import {
  ChatLayout,
  HeaderLayout,
  HeaderlessLayout,
  ProfileLayout,
} from "src/ui/features/Layouts";
import { Authorize } from "src/ui/components";
import {
  AdminPage,
  ChangePasswordPage,
  ChatPage,
  DroogAiPage,
  EditProfilePage,
  EditRolePage,
  HomePage,
  LoginPage,
  MetricsPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  RatingPage,
  TechPage,
  UnauthorizedPage,
  UserPage,
  UsersPage,
} from "src/ui/pages";
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
        key: "tech",
        path: "tech",
        element: TechPage,
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
            key: "profile/change-password",
            path: "profile/change-password",
            element: ChangePasswordPage,
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
            key: "profile/role/edit",
            path: "profile/role/edit",
            element: EditRolePage,
          },
        ],
      },
      {
        key: "parent",
        authorize: Authorize,
        roles: UserRoles.GOD,
        routes: [
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
            key: "rating",
            path: "rating",
            element: RatingPage,
          },
        ],
      },
      {
        key: "parent",
        authorize: Authorize,
        roles: UserRoles.USER,
        routes: [
          {
            key: "user/:userId",
            path: "user/:userId",
            element: UserPage,
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
        roles: UserRoles.GOD,
        routes: [
          {
            key: "droogAi",
            path: "droogAi",
            element: DroogAiPage,
          },
        ],
      },
      {
        key: "parent",
        authorize: Authorize,
        roles: UserRoles.GOD,
        routes: [
          {
            key: "chat",
            path: "chat",
            element: ChatPage,
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
        key: "home",
        index: true,
        element: HomePage,
      },
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
