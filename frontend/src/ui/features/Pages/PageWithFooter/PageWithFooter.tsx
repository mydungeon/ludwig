import React from "react";
import PageWithFooterProps from "./PageWithFooter.types";
import { PageTitle } from "src/ui/components";
import { Footer } from "src/ui/components";
import "./PageWithFooter.styles.scss";

export default function PageWithFooter({
  children,
  classNames,
  ...props
}: PageWithFooterProps) {
  classNames = classNames ? `page ${classNames}` : "page";
  return (
    <div className="pageWithFooter" data-testid="pageWithFooter">
      <div className={classNames} data-testid="page">
        <PageTitle {...props} />
        {children}
      </div>
      <Footer />
    </div>
  );
}
