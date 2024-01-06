import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import SiteHeaderMenu from "./Site";

test("loads and displays SiteHeaderMenu component", async () => {
  render(<SiteHeaderMenu />, { wrapper: MemoryRouter });
  expect(screen.getByTestId("siteHeaderMenu")).toBeTruthy();
});
