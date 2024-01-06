import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import UserDetails from "./UserDetails";

test("loads and displays UserDetails component", async () => {
  render(<UserDetails />);
  expect(screen.getByTestId("userDetails")).toBeTruthy();
});
