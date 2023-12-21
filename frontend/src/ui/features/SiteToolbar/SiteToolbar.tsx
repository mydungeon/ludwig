import React from "react";
import { useDispatch } from "react-redux";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import SiteToolbarProps from "./SiteToolbar.types";
import { toggleTheme } from "src/redux/features/ui.slice";
import Icon from "src/ui/components/Icon";
import "./SiteToolbar.styles.scss";

export default function SiteToolbar({ children }: SiteToolbarProps) {
  const dispatch = useDispatch();
  function handleToggleTheme() {
    dispatch(toggleTheme());
  }
  return (
    <div className="siteToolbar" data-testid="siteToolbar">
      <Icon icon={faCircleHalfStroke} handleClick={handleToggleTheme} />
    </div>
  );
}
