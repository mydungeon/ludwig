import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext, AppContextType } from "src/context/App";
import { SiteMenuCloseIcon } from "src/ui/features/Icons";
import { Backdrop } from "src/ui/components";
import SiteMenuItem from "./components";
import { SITE_MENU_LINKS } from "./Site.constants";
import "./Site.styles.scss";

function SiteHeaderMenu({ handleClick }: { handleClick: () => void }) {
  return (
    <div className="siteMenuHeader" data-testid="siteHeaderMenu">
      <SiteMenuCloseIcon callback={handleClick} />
    </div>
  );
}

export default function SiteMenu() {
  const { handleShowSiteMenu, showSiteMenu } =
    useContext<AppContextType>(AppContext);
  const { pathname } = useLocation();
  function handleHideMenu() {
    handleShowSiteMenu(false);
  }
  useEffect(() => {
    handleShowSiteMenu(false);
  }, [handleShowSiteMenu, pathname]);

  const className = showSiteMenu ? "siteMenu show" : "siteMenu";

  return (
    <>
      <div className={className} data-testid="siteMenu">
        <SiteHeaderMenu handleClick={handleHideMenu} />
        <div className="siteMenuBody">
          {SITE_MENU_LINKS.map(({ name, href, roles, to }) => (
            <SiteMenuItem href={href} name={name} roles={roles} to={to} />
          ))}
        </div>
      </div>
      <Backdrop show={showSiteMenu} handleClick={handleHideMenu} />
    </>
  );
}
