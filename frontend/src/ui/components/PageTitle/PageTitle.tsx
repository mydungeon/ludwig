import React from "react";
import PageTitleProps from "./PageTitle.types";

export default function PageTitle({ children, ...props }: PageTitleProps) {
  const { pageTitle } = props;

  return pageTitle ? (
    <div className="pageTitle" data-testid="pageTitle">
      <h1>{pageTitle}</h1>
      {children}
    </div>
  ) : null;
}
