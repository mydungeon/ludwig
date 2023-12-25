import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "src/ui/components/Layout/Layout";
import SiteHeader from "src/ui/features/Headers/Site";
import SiteToolbar from "src/ui/features/Toolbars/Site";
import SiteSidebar from "src/ui/features/Sidebars/Site";
import "./HeaderSidebar.styles.scss";

export default function HeaderSidebarLayout() {
  return (
    <div className="headerSidebarLayout" data-testid="headerSidebarLayout">
      <Layout>
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
