import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SiteRouterProps from "./SiteRouter.types";

export default function SiteRouter({ children }: SiteRouterProps) {
  return <Router>{children}</Router>;
}
