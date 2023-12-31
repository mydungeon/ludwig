import React, { useContext } from "react";
import { useAppSelector } from "src/redux/store";
import Header from "src/ui/elements/Header";
import Logo from "src/ui/components/Logo";
import LoggedOutMenu from "src/ui/features/Menus/LoggedOut";
import LoggedInMenu from "src/ui/features/Menus/LoggedIn/LoggedIn";
import Tooltip from "src/ui/components/Tooltip";
import Icon from "src/ui/components/Icon";
import "./Site.styles.scss";
import { TooltipDirection } from "src/ui/components/Tooltip/Tooltip.types";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AppContextType, AppContext } from "src/context/App";
import { SITE_NAME } from "./Site.constants";

export default function SiteHeader() {
  const user = useAppSelector((state) => state.userState.user);
  const { handleShowSiteMenu } = useContext<AppContextType>(AppContext);

  function handleShowMenu() {
    handleShowSiteMenu(true);
  }

  return (
    <Header classNames="site" data-testid="siteHeader">
      <Logo classNames="siteHeader" logoText={SITE_NAME} />
      <div className="right">
        {!user ? <LoggedOutMenu /> : <LoggedInMenu {...user} />}
        <Tooltip message="Open Menu" direction={TooltipDirection.LEFT}>
          <Icon
            classNames="menuIcon"
            icon={faBars}
            handleClick={handleShowMenu}
            size="2x"
          />
        </Tooltip>
      </div>
    </Header>
  );
}
