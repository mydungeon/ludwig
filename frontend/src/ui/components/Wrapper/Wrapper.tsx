import React from "react";
import WrapperProps from "./Wrapper.types";
import "./Wrapper.styles.scss";

export default function Wrapper({
  children,
  classNames,
  dataTestId,
  headerText,
}: WrapperProps) {
  classNames = classNames ? `wrapper ${classNames}` : "wrapper";
  dataTestId = dataTestId ? `wrapper-${dataTestId}` : "wrapper";
  return (
    <div className={classNames} data-testid={dataTestId}>
      {headerText && <h1>{headerText}</h1>}
      {children}
    </div>
  );
}
