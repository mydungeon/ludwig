import React from "react";
import { Link } from "react-router-dom";
import SiteLinkProps from "./SiteLink.types";
import "./SiteLink.styles.scss";

export default function SiteLink({
  classNames,
  destination,
  linkText,
}: SiteLinkProps) {
  return (
    <Link
      className={`siteLink ${classNames}`}
      data-testid="siteLink"
      to={destination}
    >
      {linkText}
    </Link>
  );
}
