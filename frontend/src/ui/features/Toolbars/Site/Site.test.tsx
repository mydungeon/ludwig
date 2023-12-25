import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteToolbar from "./Site";

test("loads and displays SiteToolbar component", async () => {
  render(<SiteToolbar />);
  expect(screen.getByTestId("sitetoolbar")).toBeTruthy();
});
