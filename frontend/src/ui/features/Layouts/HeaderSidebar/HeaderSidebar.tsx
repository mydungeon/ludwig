import React from "react";
import { Outlet } from "react-router-dom";
import HeaderSidebarProps from "./HeaderSidebar.types";
import { ChatWindow, Layout } from "src/ui/components";
import { LudwigSiteHeader } from "src/ui/features/Headers";
import { SiteMenu } from "src/ui/features/Menus";
import SiteToolbar from "src/ui/features/Toolbars/Site";
import SiteSidebar from "src/ui/features/Sidebars/Site";
import "./HeaderSidebar.styles.scss";

export default function HeaderSidebarLayout({ children }: HeaderSidebarProps) {
  return (
    <div className="headerSidebarLayout" data-testid="headerSidebarLayout">
      <Layout>
        <SiteMenu />
        <LudwigSiteHeader />
        <SiteToolbar />
        <div className="headerSidebarLayout">
          <SiteSidebar>{children}</SiteSidebar>
          <Outlet />
        </div>
      </Layout>
      {/* <ChatWindow /> */}
    </div>
  );
}
