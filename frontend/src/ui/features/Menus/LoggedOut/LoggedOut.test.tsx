import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import LoggedOutMenu from "./LoggedOut";

test("loads and displays LoggedOutMenu component", async () => {
  render(<LoggedOutMenu />, { wrapper: MemoryRouter });
  expect(screen.getByTestId("loggedOutMenu")).toBeTruthy();
});
