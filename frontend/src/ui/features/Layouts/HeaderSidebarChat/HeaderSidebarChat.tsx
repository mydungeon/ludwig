import React from "react";
import { Outlet } from "react-router-dom";
import HeaderSidebarChatLayoutProps from "./HeaderSidebarChat.types";
import { Layout } from "src/ui/components";
import { DroogAiSiteHeader } from "src/ui/features/Headers";
import { SiteMenu } from "src/ui/features/Menus";
import SiteToolbar from "src/ui/features/Toolbars/Site";
import SiteSidebar from "src/ui/features/Sidebars/Site";
import "./HeaderSidebarChat.styles.scss";

export default function HeaderSidebarChatLayout({
  children,
}: HeaderSidebarChatLayoutProps) {
  return (
    <div
      className="headerSidebarChatLayout"
      data-testid="headerSidebarChatLayout"
    >
      <Layout>
        <SiteMenu />
        <DroogAiSiteHeader />
        <SiteToolbar />
        <div className="headerSidebarLayout">
          <SiteSidebar>{children}</SiteSidebar>
          <Outlet />
        </div>
      </Layout>
    </div>
  );
}
