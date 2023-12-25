import React from "react";
import { useDispatch } from "react-redux";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import SiteToolbarProps from "./Site.types";
import { toggleTheme } from "src/redux/features/ui.slice";
import Icon from "src/ui/components/Icon";
import "./Site.styles.scss";
import Tooltip from "src/ui/components/Tooltip";
import { ReactTooltipPlace } from "src/ui/components/Tooltip/Tooltip.constant";

export default function SiteToolbar({ children }: SiteToolbarProps) {
  const dispatch = useDispatch();
  function handleToggleTheme() {
    dispatch(toggleTheme());
  }
  return (
    <div className="siteToolbar" data-testid="siteToolbar">
      <Tooltip
        id="toolBarThemeSwitcher"
        message="Switch Theme"
        place={ReactTooltipPlace.BOTTOM}
      >
        <Icon icon={faCircleHalfStroke} handleClick={handleToggleTheme} />
      </Tooltip>
    </div>
  );
}
