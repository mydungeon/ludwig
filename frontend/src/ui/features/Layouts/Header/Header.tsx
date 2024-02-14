import React from "react";
import { Outlet } from "react-router-dom";
import { LudwigSiteHeader } from "src/ui/features/Headers";
import Layout from "src/ui/components/Layout/Layout";
import { SiteMenu } from "src/ui/features/Menus";
import SiteToolbar from "src/ui/features/Toolbars/Site";
import "./Header.styles.scss";

export default function HeaderLayout() {
  return (
    <div className="headerLayout" data-testid="headerLayout">
      <Layout>
        <SiteMenu />
        <LudwigSiteHeader />
        <SiteToolbar />
        <Outlet />
      </Layout>
    </div>
  );
}
