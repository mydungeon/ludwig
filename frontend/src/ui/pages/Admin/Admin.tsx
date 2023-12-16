import React from "react";
import Page from "src/ui/components/Page/Page";
import AdminPageProps from "./Admin.types";
import "./Admin.styles.scss";

export default function AdminPage({ pageTitle }: AdminPageProps) {
  return (
    <Page classNames="admin" data-testid="adminPage" pageTitleText="Admin" />
  );
}
