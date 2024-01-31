import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext, AppContextType } from "src/context/App";
import { SiteMenuCloseIcon } from "../../Icons";
import { Backdrop } from "src/ui/components";
import { SITE_MENU_LINKS } from "./Site.constants";
import { useAuth } from "src/hooks";
import "./Site.styles.scss";

function SiteHeaderMenu({ handleClick }: { handleClick: () => void }) {
  return (
    <div className="siteMenuHeader" data-testid="siteHeaderMenu">
      <SiteMenuCloseIcon callback={handleClick} />
    </div>
  );
}

function SiteMenuItem({
  to,
  href,
  name,
  roles,
}: {
  to?: string;
  href?: string;
  name: string;
  roles: string;
}) {
  const { isAuthorized } = useAuth(roles);
  if (!isAuthorized) return null;
  return to ? (
    <div className="siteMenuItem" key={to}>
      <Link to={to}>{name}</Link>
    </div>
  ) : (
    <div className="siteMenuItem" key={href}>
      <a href={href}>{name}</a>
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
