import React from "react";
import { Page } from "src/ui/components";
import "./Unauthorized.styles.scss";

export default function UnauthorizedPage() {
  return (
    <Page classNames="unauthorized" pageTitle="Unauthorized">
      <img
        alt="Ludwig says nope"
        width="400"
        src="/assets/animations/ludwig.gif"
      />
    </Page>
  );
}
