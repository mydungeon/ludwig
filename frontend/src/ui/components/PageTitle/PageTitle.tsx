import React from "react";
import PageTitleProps from "./PageTitle.types";

export default function PageTitle({ children, ...props }: PageTitleProps) {
  const { pageTitleText } = props;

  return pageTitleText ? (
    <div className="pageTitle" data-testid="pageTitle">
      <h1>{pageTitleText}</h1>
      {children}
    </div>
  ) : null;
}
