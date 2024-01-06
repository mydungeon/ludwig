import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import LoggedInMenu from "./LoggedIn";

test("loads and displays LoggedInMenu component", async () => {
  render(
    <MemoryRouter>
      <LoggedInMenu userRole="user" />
    </MemoryRouter>
  );
  expect(screen.getByTestId("loggedInMenu")).toBeTruthy();
});
