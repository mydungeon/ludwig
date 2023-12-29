import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TooltipDirection } from "./Tooltip.types";
import Tooltip from "./Tooltip";

test("loads and displays Tooltip component", async () => {
  render(
    <Tooltip delay={400} direction={TooltipDirection.BOTTOM} message="Test" />
  );
  expect(screen.getByTestId("tooltip")).toBeTruthy();
});
