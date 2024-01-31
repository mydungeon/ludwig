import {
  faCircleUser,
  faPen,
  faShield,
  faUsers,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { UserRoles } from "../../User/User.types";
export const PROFILE_MENU = [
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
    icon: faShield,
    text: "Edit Role",
    to: "profile/role/edit",
    roles: UserRoles.USER,
  },
  {
    icon: faUsers,
    text: "Users",
    roles: UserRoles.ADMIN,
    to: "users",
  },
  {
    icon: faChartLine,
    text: "Metrics",
    roles: UserRoles.ADMIN,
    to: "metrics",
  },
];

export const PROFILE_MENU_TITLE = "My Links";
