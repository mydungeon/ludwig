import { UserRoles } from "../../User/User.types";

export const SITE_MENU_LINKS = [
  {
    name: "Home",
    to: "/",
    roles: UserRoles.USER,
  },
  {
    name: "Profile",
    to: "profile",
    roles: UserRoles.USER,
  },
  {
    name: "DroogAI",
    to: "droogAi",
    roles: UserRoles.GOD,
  },
  {
    name: "Ludwig REST API",
    href: "http://localhost:8000/docs",
    roles: UserRoles.ADMIN,
  },
  {
    name: "Feedback",
    to: "feedback",
    roles: UserRoles.USER,
  },
];
