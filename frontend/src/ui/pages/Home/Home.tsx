import React from "react";
import { HomeCarousel } from "src/ui/features/Carousels";
import { PageWithFooter } from "src/ui/features/Pages";
import "./Home.styles.scss";

export default function HomePage() {
  return (
    <PageWithFooter classNames="home">
      <HomeCarousel />
    </PageWithFooter>
  );
}
