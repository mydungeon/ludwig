import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

test("loads and displays Breadcrumbs component", async () => {
  render(
    <MemoryRouter>
      <Breadcrumbs />
    </MemoryRouter>
  );
  expect(screen.getByTestId("breadcrumbs")).toBeTruthy();
});
