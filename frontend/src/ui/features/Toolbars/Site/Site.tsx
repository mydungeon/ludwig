import React from "react";
import { useDispatch } from "react-redux";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { toggleTheme } from "src/redux/features/ui.slice";
import { Breadcrumbs } from "src/ui/components";
import { Icon } from "src/ui/components";
import { Tooltip } from "src/ui/components";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import "./Site.styles.scss";

export default function SiteToolbar() {
  const dispatch = useDispatch();
  function handleToggleTheme() {
    dispatch(toggleTheme());
  }
  return (
    <div className="siteToolbar" data-testid="siteToolBar">
      <Breadcrumbs />
      <Tooltip message="Switch Theme" direction={TooltipDirection.LEFT}>
        <Icon icon={faCircleHalfStroke} handleClick={handleToggleTheme} />
      </Tooltip>
    </div>
  );
}
