import React from "react";
import Page from "src/ui/components/Page/Page";
import "./Home.styles.scss";
import { HomeCarousel } from "src/ui/features/Carousels";

export default function HomePage() {
  return (
    <Page classNames="home">
      <HomeCarousel />
    </Page>
  );
}
