import React from "react";
import { useSelector } from "react-redux";
import LayoutProps from "./Layout.types";
import "./Layout.styles.scss";

export default function Layout({ children }: LayoutProps) {
  const theme = useSelector((state: any) => state.uiState.theme);

  return (
    <div className={`${theme} layout`} data-testid="layout">
      {children}
    </div>
  );
}
