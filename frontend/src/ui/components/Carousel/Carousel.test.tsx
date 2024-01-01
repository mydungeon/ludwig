import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./Carousel";

test("loads and displays Carousel component", async () => {
  render(<Carousel slides={[]} />);
  expect(screen.getByTestId("carousel")).toBeTruthy();
});
