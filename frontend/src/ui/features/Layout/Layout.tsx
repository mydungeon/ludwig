import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import SiteHeader from "src/ui/features/SiteHeader";
import LayoutProps from "./Layout.types";
import "./Layout.styles.scss";
import SiteToolbar from "../SiteToolbar";

export default function Layout({ children }: LayoutProps) {
  const theme = useSelector((state: any) => state.uiState);

  return (
    <div className={`${theme} layout`} data-testid="layout">
      <SiteHeader />
      <SiteToolbar />
      <Outlet />
    </div>
  );
}
