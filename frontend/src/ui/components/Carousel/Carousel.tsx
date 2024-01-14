import React, { useEffect, useState } from "react";
import { CarouselProps } from "./Carousel.types";
import "./Carousel.styles.scss";
import {
  LeftCarouselArrowIcon,
  RightCarouselArrowIcon,
} from "src/ui/features/Icons";

export default function Carousel({ slides, timeout = true }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(timeout);
  const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  const previousSlide =
    currentSlide === 0 ? slides.length - 1 : currentSlide - 1;

  function handleSetPreviousSlide() {
    setAutoPlay(false);
    setCurrentSlide(previousSlide);
  }

  function handleSetNextSlide() {
    setAutoPlay(false);
    setCurrentSlide(nextSlide);
  }

  useEffect(() => {
    if (autoPlay) {
      setTimeout(() => {
        setCurrentSlide(nextSlide);
      }, 5000);
    }
  });

  return (
    <div className="carousel" data-testid="carousel">
      <LeftCarouselArrowIcon callback={handleSetPreviousSlide} />
      {slides.map(({ alt, src }, index) => {
        return (
          <img
            alt={alt}
            className={currentSlide === index ? "slide" : "slide hidden"}
            key={index}
            src={src}
          />
        );
      })}
      <RightCarouselArrowIcon callback={handleSetNextSlide} />
      <span className="indicators">
        {slides.map((_, index: number) => (
          <button
            className={
              currentSlide === index ? "indicator current" : "indicator"
            }
            key={index}
            onClick={() => {
              setCurrentSlide(index);
            }}
          ></button>
        ))}
      </span>
    </div>
  );
}
