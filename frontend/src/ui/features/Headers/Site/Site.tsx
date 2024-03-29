import React, { useContext } from "react";
import { useAppSelector } from "src/redux/store";
import { Header } from "src/ui/components";
import LoggedOutMenu from "src/ui/features/Menus/LoggedOut";
import LoggedInMenu from "src/ui/features/Menus/LoggedIn/LoggedIn";
import { MenuIcon } from "src/ui/features/Icons";
import { AppContextType, AppContext } from "src/context/App";
import SiteHeaderProps from "./Site.types";
import "./Site.styles.scss";

export default function SiteHeader({ children }: SiteHeaderProps) {
  const user = useAppSelector((state) => state.profileState.profile);
  const { handleShowSiteMenu } = useContext<AppContextType>(AppContext);

  function handleShowMenu() {
    handleShowSiteMenu(true);
  }

  return (
    <Header classNames="site" dataTestId="brandedHeader">
      {children}
      <div className="right">
        {!user ? <LoggedOutMenu /> : <LoggedInMenu {...user} />}
        {user && <MenuIcon callback={handleShowMenu} />}
      </div>
    </Header>
  );
}
