import React from "react";
import PageProps from "./Page.types";
import PageTitle from "src/ui/components/PageTitle";
import "./Page.styles.scss";

export default function Page({ children, classNames, ...props }: PageProps) {
  return (
    <div className={`page ${classNames}`} data-testid="page">
      <PageTitle {...props} />
      {children}
    </div>
  );
}
