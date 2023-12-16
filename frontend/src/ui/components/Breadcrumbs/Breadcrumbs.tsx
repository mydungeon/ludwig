import React from "react";
import BreadcrumbsProps from "./Breadcrumbs.types";
import "./Breadcrumbs.styles.scss";

export default function Breadcrumbs({ children }: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs" data-testid="breadcrumbs">
      {children}
    </div>
  );
}
