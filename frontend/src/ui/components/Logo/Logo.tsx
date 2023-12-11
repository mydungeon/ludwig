import React from "react";
import LogoProps from "./Logo.types";
import { ReactComponent as LogoSvg } from "src/assets/logo.svg";
import "./Logo.styles.scss";
import { Link } from "react-router-dom";

export default function Logo({ classNames, logoText }: LogoProps) {
  return (
    <Link className={`logo ${classNames}`} data-testid="logo" to="/">
      <div>
        <LogoSvg />
      </div>
      <div>{logoText}</div>
    </Link>
  );
}
