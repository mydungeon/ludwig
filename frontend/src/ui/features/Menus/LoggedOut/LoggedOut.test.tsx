import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoggedOutMenu from "./LoggedOut";

test("loads and displays LoggedOutMenu component", async () => {
  render(<LoggedOutMenu />);
  expect(screen.getByTestId("loggedOutMenu")).toBeTruthy();
});
