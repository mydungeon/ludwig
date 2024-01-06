import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import HeaderLayout from "./Header";
import { MemoryRouter } from "react-router-dom";

test("loads and displays HeaderLayout component", async () => {
  render(
    <MemoryRouter>
      <HeaderLayout />
    </MemoryRouter>
  );
  expect(screen.getByTestId("headerLayout")).toBeTruthy();
});
