import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "src/redux/features/ui.slice";
import { Breadcrumbs } from "src/ui/components";
import { ThemeToggleIcon } from "src/ui/features/Icons";
import "./Site.styles.scss";

export default function SiteToolbar() {
  const theme = useSelector((state: any) => state.uiState);
  const dispatch = useDispatch();
  function handleToggleTheme() {
    dispatch(toggleTheme());
  }

  return (
    <div className="siteToolbar" data-testid="siteToolBar">
      <Breadcrumbs />
      <ThemeToggleIcon
        callback={handleToggleTheme}
        toggle={theme === "light-theme"}
      />
    </div>
  );
}
