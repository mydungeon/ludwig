import React from "react";
import Page from "src/ui/components/Page/Page";
import "./Unauthorized.styles.scss";

export default function UnauthorizedPage() {
  return (
    <Page classNames="unauthorized" pageTitleText="Unauthorized">
      <img
        alt="Ludwig says nope"
        width="400"
        src="/assets/animations/ludwig.gif"
      />
    </Page>
  );
}
