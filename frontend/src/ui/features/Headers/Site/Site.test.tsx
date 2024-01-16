import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import SiteHeader from "./Site";

test("loads and displays SiteHeader component", async () => {
  render(
    <MemoryRouter>
      <SiteHeader>
        <div>test</div>
      </SiteHeader>
    </MemoryRouter>
  );
  expect(screen.getByTestId("header-brandedHeader")).toBeTruthy();
});
