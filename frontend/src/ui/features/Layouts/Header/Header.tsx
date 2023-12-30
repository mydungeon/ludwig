import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "src/ui/components/Layout/Layout";
import SiteMenu from "src/ui/features/Menus/Site";
import SiteHeader from "src/ui/features/Headers/Site";
import SiteToolbar from "src/ui/features/Toolbars/Site";
import "./Header.styles.scss";

export default function HeaderLayout() {
  return (
    <div className="headerLayout" data-testid="headerLayout">
      <Layout>
        <SiteMenu />
        <SiteHeader />
        <SiteToolbar />
        <Outlet />
      </Layout>
    </div>
  );
}
