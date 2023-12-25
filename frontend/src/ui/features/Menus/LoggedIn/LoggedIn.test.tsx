import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoggedInMenu from "./LoggedIn";

test("loads and displays LoggedInMenu component", async () => {
  render(<LoggedInMenu userRole="user" />);
  expect(screen.getByTestId("loggedInMenu")).toBeTruthy();
});
