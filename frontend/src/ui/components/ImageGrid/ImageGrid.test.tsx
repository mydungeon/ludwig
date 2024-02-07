import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageGrid from "./ImageGrid";

test("loads and displays ImageGrid component", async () => {
  render(<ImageGrid images={[]} />);
  expect(screen.getByTestId("imagegrid")).toBeTruthy();
});
