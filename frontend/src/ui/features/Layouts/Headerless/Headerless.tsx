import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "src/ui/components";
import "./Headerless.styles.scss";

export default function HeaderlessLayout() {
  return (
    <div className="headerlessLayout" data-testid="headerlessLayout">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}
