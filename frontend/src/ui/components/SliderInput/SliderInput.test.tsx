import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SliderInput from "./SliderInput";

test("loads and displays SliderInput component", async () => {
  render(<SliderInput step={5} min={0} max={100} />);
  expect(screen.getByTestId("sliderInput")).toBeTruthy();
});
