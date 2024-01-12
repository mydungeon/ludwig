import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { AppContext, AppContextType } from "src/context/App";
import { Icon } from "src/ui/components";
import { Backdrop } from "src/ui/components";
import { SITE_MENU_LINKS } from "./Site.constants";
import "./Site.styles.scss";

function SiteHeaderMenu({ handleClick }: { handleClick: () => void }) {
  return (
    <div className="siteMenuHeader" data-testid="siteHeaderMenu">
      <Icon icon={faXmark} handleClick={handleClick} size="2xl" />
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
          {SITE_MENU_LINKS.map(({ name, to }) => (
            <div className="siteMenuItem" key={to}>
              <Link to={to}>{name}</Link>
            </div>
          ))}
        </div>
      </div>
      <Backdrop show={showSiteMenu} handleClick={handleHideMenu} />
    </>
  );
}
