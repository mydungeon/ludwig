import React from "react";
import { BrowserRouter } from "react-router-dom";
import SiteRouterProps from "./SiteRouter.types";

export default function SiteRouter({ children }: SiteRouterProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
