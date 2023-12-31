import React from "react";
import WrapperProps from "./Wrapper.types";
import "./Wrapper.styles.scss";

export default function Wrapper({
  children,
  classNames,
  headerText,
}: WrapperProps) {
  classNames = classNames ? `wrapper ${classNames}` : "wrapper";
  return (
    <div className={classNames} data-testid="wrapper">
      {headerText && <h1>{headerText}</h1>}
      {children}
    </div>
  );
}
