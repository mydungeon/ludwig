import React from "react";
import { Link } from "react-router-dom";
import LogoProps from "./Logo.types";
import "./Logo.styles.scss";

export default function Logo({ children, ...props }: LogoProps) {
  const { classNames, logoText } = props;
  const className = classNames ? `logo ${classNames}` : "logo";
  return (
    <Link className={className} data-testid="logo" to="/">
      <div>{children}</div>
      {logoText && <div className="brand">{logoText}</div>}
    </Link>
  );
}
