import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import HeaderSidebarLayout from "./HeaderSidebar";

test("loads and displays HeaderSidebarLayout component", async () => {
  render(
    <MemoryRouter>
      <HeaderSidebarLayout />
    </MemoryRouter>
  );
  expect(screen.getByTestId("headerSidebarLayout")).toBeTruthy();
});
