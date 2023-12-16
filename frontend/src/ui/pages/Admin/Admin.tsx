import React from "react";
import AdminPageProps from "./Admin.types";
import "./Admin.styles.scss";

export default function AdminPage({ pageTitle }: AdminPageProps) {
  return (
    <div className="admin" data-testid="adminPage">
      <div>{pageTitle}</div>
    </div>
  );
}
