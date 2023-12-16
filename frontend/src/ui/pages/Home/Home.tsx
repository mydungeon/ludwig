import React from "react";
import Page from "src/ui/components/Page/Page";
import HomePageProps from "./Home.types";
import "./Home.styles.scss";

export default function HomePage({ pageTitle }: HomePageProps) {
  return <Page classNames="home" data-testid="homePage" pageTitleText="Home" />;
}
