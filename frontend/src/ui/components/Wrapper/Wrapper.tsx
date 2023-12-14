import React from "react";
import Header from "src/ui/elements/Header";
import WrapperProps from "./Wrapper.types";
import "./Wrapper.styles.scss";

export default function Wrapper({
  children,
  classNames,
  headerText,
}: WrapperProps) {
  return (
    <div className={`wrapper ${classNames}`} data-testid="wrapper">
      {headerText && <h1>{headerText}</h1>}
      {children}
    </div>
  );
}
