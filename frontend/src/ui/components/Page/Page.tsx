import React from "react";
import PageProps from "./Page.types";
import { PageTitle, Spacer } from "src/ui/components";
import "./Page.styles.scss";

export default function Page({ children, classNames, ...props }: PageProps) {
  classNames = classNames ? `page ${classNames}` : "page";
  return (
    <div className={classNames} data-testid="page">
      <Spacer />
      <PageTitle {...props} />
      {children}
    </div>
  );
}
