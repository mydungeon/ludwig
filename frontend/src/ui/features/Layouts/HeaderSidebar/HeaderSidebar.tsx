import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "src/ui/components/Layout/Layout";
import SiteMenu from "src/ui/features/Menus/Site";
import SiteHeader from "src/ui/features/Headers/Site";
import SiteToolbar from "src/ui/features/Toolbars/Site";
import SiteSidebar from "src/ui/features/Sidebars/Site";
import "./HeaderSidebar.styles.scss";

export default function HeaderSidebarLayout() {
  return (
    <div className="headerSidebarLayout" data-testid="headerSidebarLayout">
      <Layout>
        <SiteMenu />
        <SiteHeader />
        <SiteToolbar />
        <div className="headerSidebarLayout">
          <SiteSidebar />
          <Outlet />
        </div>
      </Layout>
    </div>
  );
}
