import React from "react";
import Page from "src/ui/components/Page";
import "./NotFound.styles.scss";

export default function NotFoundPage() {
  return (
    <Page classNames="notFound" pageTitleText="Not Found">
      <img
        alt="Ludwig says nope"
        width="400"
        src="/assets/animations/ludwig.gif"
      />
    </Page>
  );
}
