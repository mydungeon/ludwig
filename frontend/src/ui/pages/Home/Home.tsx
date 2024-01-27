import React, { useEffect } from "react";
import { ludwigAscii } from "src/utils/ascii";
import { HomeCarousel } from "src/ui/features/Carousels";
import { BrandedFooterPage } from "src/ui/features/Pages";
import "./Home.styles.scss";

export default function HomePage() {
  useEffect(() => {
    ludwigAscii(`Good ol' Ludwig Von...`);
  }, []);
  return (
    <BrandedFooterPage classNames="home">
      <HomeCarousel />
    </BrandedFooterPage>
  );
}
