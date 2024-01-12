import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

test("loads and displays Header component", async () => {
  render(<Header dataTestId="test" />);
  expect(screen.getByTestId("header-test")).toBeTruthy();
});
