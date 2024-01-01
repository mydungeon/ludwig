import React from "react";
import Carousel from "src/ui/components/Carousel";
import { HOME_CAROUSEL_SLIDES } from "./Home.constants";

export default function HomeCarousel() {
  return <Carousel slides={HOME_CAROUSEL_SLIDES} />;
}
