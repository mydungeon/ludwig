import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./Page";

test("loads and displays Page component", async () => {
  render(<Page pageTitleText="Test Title" />);
  expect(screen.getByTestId("page")).toBeTruthy();
});
