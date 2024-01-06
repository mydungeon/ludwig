import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import SiteToolbar from "./Site";
import { MemoryRouter } from "react-router-dom";

test("loads and displays SiteToolbar component", async () => {
  render(
    <MemoryRouter>
      <SiteToolbar />
    </MemoryRouter>
  );
  expect(screen.getByTestId("siteToolBar")).toBeTruthy();
});
