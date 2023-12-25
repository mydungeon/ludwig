import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteHeader from "./Site";

test("loads and displays SiteHeader component", async () => {
  render(<SiteHeader />);
  expect(screen.getByTestId("siteheader")).toBeTruthy();
});
