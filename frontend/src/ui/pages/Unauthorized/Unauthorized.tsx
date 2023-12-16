import React from "react";
import Page from "src/ui/components/Page/Page";
import UnauthorizedPageProps from "./Unauthorized.types";
import "./Unauthorized.styles.scss";

export default function UnauthorizedPage({ children }: UnauthorizedPageProps) {
  return (
    <Page
      classNames="unauthorized"
      data-testid="unauthorizedPage"
      pageTitleText="Unauthorized"
    />
  );
}
