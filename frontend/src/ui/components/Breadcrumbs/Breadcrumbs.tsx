import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.styles.scss";

function BreadCrumb({
  crumb,
  currentLink,
}: {
  crumb: string;
  currentLink: string;
}) {
  return (
    <div className="breadcrumb">
      <Link to={currentLink}>{crumb}</Link>
    </div>
  );
}

export default function Breadcrumbs() {
  const location = useLocation();
  const breadCrumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "");

  let currentLink = "";

  return (
    <div className="breadcrumbs" data-testid="breadcrumbs" key="breadcrumbs">
      {breadCrumbs.map((crumb) => {
        currentLink += `/${crumb}`;
        return (
          <BreadCrumb key={crumb} crumb={crumb} currentLink={currentLink} />
        );
      })}
    </div>
  );
}
