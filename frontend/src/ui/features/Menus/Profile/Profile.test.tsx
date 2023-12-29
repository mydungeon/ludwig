import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "./Profile";

test("loads and displays Profile component", async () => {
  render(<Profile />);
  expect(screen.getByTestId("profile")).toBeTruthy();
});
