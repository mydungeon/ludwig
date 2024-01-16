import React from "react";
import { HomeCarousel } from "src/ui/features/Carousels";
import { BrandedFooterPage } from "src/ui/features/Pages";
import "./Home.styles.scss";

export default function HomePage() {
  return (
    <BrandedFooterPage classNames="home">
      <HomeCarousel />
    </BrandedFooterPage>
  );
}
