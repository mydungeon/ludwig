import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Badge from "./Badge";

test("loads and displays Badge component", async () => {
  render(<Badge text="test badge" />);
  expect(screen.getByTestId("badge")).toBeTruthy();
});
