import React from "react";
import { Outlet } from "react-router-dom";
import SiteHeader from "src/ui/features/SiteHeader";
import LayoutProps from "./Layout.types";
import "./Layout.styles.scss";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout" data-testid="layout">
      <SiteHeader />
      <Outlet />
    </div>
  );
}
