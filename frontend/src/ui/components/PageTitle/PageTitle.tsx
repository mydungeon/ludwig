import React from "react";
import PageTitleProps from "./PageTitle.types";
import "./PageTitle.styles.scss";

export default function PageTitle({ children, ...props }: PageTitleProps) {
  const { pageTitleText } = props;

  return (
    <div className="pageTitle" data-testid="pageTitle">
      <h1>{pageTitleText}</h1>
      {children}
    </div>
  );
}
