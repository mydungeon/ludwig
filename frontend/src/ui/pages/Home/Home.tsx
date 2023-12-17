import React from "react";
import Page from "src/ui/components/Page/Page";
import "./Home.styles.scss";

export default function HomePage() {
  return <Page classNames="home" data-testid="homePage" pageTitleText="Home" />;
}
