import React from "react";
import SliderInputProps from "./SliderInput.types";
import "./SliderInput.styles.scss";

// ARTICLE: https://relatablecode.com/how-to-make-a-simple-slider-component-in-react
export default function SliderInput({
  children,
  classNames,
  handleSetValue,
  min,
  max,
  step,
  value,
}: SliderInputProps) {
  const className = classNames ? `slider ${classNames}` : `slider`;
  const getBackgroundSize = () => ({
    backgroundSize: `${(value * 100) / max}% 100%`,
  });

  return (
    <div className={className}>
      {children}
      <input
        min={min}
        max={max}
        onChange={handleSetValue}
        step={step}
        style={getBackgroundSize()}
        type="range"
        value={value}
      />
    </div>
  );
}
