import React from "react";
import BrandedFooterPageProps from "./BrandedFooter.types";
import { PageTitle } from "src/ui/components";
import { BrandedFooter } from "src/ui/features/Footers";
import "./BrandedFooter.styles.scss";

export default function BrandedFooterPage({
  children,
  classNames,
  ...props
}: BrandedFooterPageProps) {
  classNames = classNames ? `page ${classNames}` : "page";
  return (
    <div className="brandedFooterPage">
      <div className={classNames} data-testid="page">
        <PageTitle {...props} />
        {children}
      </div>
      <BrandedFooter />
    </div>
  );
}
