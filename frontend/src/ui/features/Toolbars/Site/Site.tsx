import React from "react";
import { useDispatch } from "react-redux";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import SiteToolbarProps from "./Site.types";
import Breadcrumbs from "src/ui/components/Breadcrumbs";
import { toggleTheme } from "src/redux/features/ui.slice";
import Icon from "src/ui/components/Icon";
import Tooltip from "src/ui/components/Tooltip";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import "./Site.styles.scss";

export default function SiteToolbar({ children }: SiteToolbarProps) {
  const dispatch = useDispatch();
  function handleToggleTheme() {
    dispatch(toggleTheme());
  }
  return (
    <div className="siteToolbar" data-testid="siteToolbar">
      <Breadcrumbs />
      <Tooltip message="Switch Theme" direction={TooltipDirection.LEFT}>
        <Icon icon={faCircleHalfStroke} handleClick={handleToggleTheme} />
      </Tooltip>
    </div>
  );
}
