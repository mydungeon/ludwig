import React from "react";
import Page from "src/ui/components/Page";
import "./NotFound.styles.scss";

export default function NotFoundPage() {
  return (
    <Page
      classNames="notFound"
      data-testid="notFoundPage"
      pageTitleText="Not Found"
    />
  );
}
