import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SliderInput from "./SliderInput";

test("loads and displays SliderInput component", async () => {
  render(
    <SliderInput
      handleSetValue={(e: any) => console.log(e.target.value)}
      min={0}
      max={100}
      step={5}
      value={1}
    />
  );
  expect(screen.getByTestId("sliderInput")).toBeTruthy();
});
