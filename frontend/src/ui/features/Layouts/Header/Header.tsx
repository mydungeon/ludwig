import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "src/ui/components/Layout/Layout";
import SiteHeader from "src/ui/features/Headers/Site";
import SiteToolbar from "src/ui/features/Toolbars/Site";
import "./Header.styles.scss";

export default function HeaderLayout() {
  return (
    <div className="headerLayout" data-testid="headerLayout">
      <Layout>
        <SiteHeader />
        <SiteToolbar />
        <Outlet />
      </Layout>
    </div>
  );
}
