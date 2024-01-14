import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { toggleTheme } from "src/redux/features/ui.slice";
import { Breadcrumbs } from "src/ui/components";
import { Icon } from "src/ui/components";
import { Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import "./Site.styles.scss";

export default function SiteToolbar() {
  const theme = useSelector((state: any) => state.uiState);
  const dispatch = useDispatch();
  function handleToggleTheme() {
    dispatch(toggleTheme());
  }
  const icon = theme === "light-theme" ? faToggleOn : faToggleOff;
  return (
    <div className="siteToolbar" data-testid="siteToolBar">
      <Breadcrumbs />
      <Tooltip message="Switch Theme" direction={TooltipDirection.LEFT}>
        <Icon icon={icon} handleClick={handleToggleTheme} size="2xl" />
      </Tooltip>
    </div>
  );
}
