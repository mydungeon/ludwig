import React, { useContext } from "react";
import SiteMenuProps from "./Site.types";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { AppContext, AppContextType } from "src/context/App";
import Icon from "src/ui/components/Icon";
import "./Site.styles.scss";

function SiteMenuHeader({ handleClick }: { handleClick: () => void }) {
  return (
    <div className="siteMenuHeader">
      <Icon icon={faXmark} handleClick={handleClick} size="2xl" />
    </div>
  );
}

export default function SiteMenu({ children }: SiteMenuProps) {
  const { handleShowSiteMenu, showSiteMenu } =
    useContext<AppContextType>(AppContext);

  function handleHideMenu() {
    handleShowSiteMenu(false);
  }

  const className = showSiteMenu ? "siteMenu show" : "siteMenu";
  return (
    <div className={className} data-testid="siteMenu">
      <SiteMenuHeader handleClick={handleHideMenu} />
      <div className="siteMenuBody">
        <div className="siteMenuItem">Item Test</div>
        <div className="siteMenuItem">Item Test</div>
        <div className="siteMenuItem">Item Test Item Test</div>
        {children}
      </div>
    </div>
  );
}
