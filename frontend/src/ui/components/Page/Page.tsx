import React from "react";
import PageProps from "./Page.types";
import PageTitle from "src/ui/components/PageTitle";
import "./Page.styles.scss";

export default function Page({ children, classNames, ...props }: PageProps) {
  classNames = classNames ? `page ${classNames}` : "page";
  return (
    <div className={classNames} data-testid="page">
      <PageTitle {...props} />
      {children}
    </div>
  );
}
