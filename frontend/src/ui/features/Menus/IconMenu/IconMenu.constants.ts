import {
  faCircleUser,
  faPen,
  faShield,
  faUsers,
  faChartLine,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { UserRoles } from "src/ui/features/User/User.types";

const ADMIN_MENU = [
  {
    icon: faShield,
    text: "Edit Role",
    to: "profile/role/edit",
    roles: UserRoles.ADMIN,
  },
];

const GOD_MENU = [
  {
    icon: faUsers,
    text: "Users",
    roles: UserRoles.GOD,
    to: "users",
  },
  {
    icon: faChartLine,
    text: "Metrics",
    roles: UserRoles.GOD,
    to: "metrics",
  },
];

const USER_MENU = [
  {
    icon: faCircleUser,
    text: "Profile",
    roles: UserRoles.USER,
    to: "profile",
  },
  {
    icon: faPen,
    text: "Edit Profile",
    roles: UserRoles.USER,
    to: "profile/edit",
  },
  {
    icon: faLock,
    text: "Change Password",
    roles: UserRoles.USER,
    to: "profile/change-password",
  },
];

export const SIDE_MENUS = [
  {
    items: USER_MENU,
    role: UserRoles.USER,
    title: "Profile",
  },
  {
    items: ADMIN_MENU,
    role: UserRoles.ADMIN,
    title: "Admin",
  },
  {
    items: GOD_MENU,
    role: UserRoles.GOD,
    title: "God",
  },
];
