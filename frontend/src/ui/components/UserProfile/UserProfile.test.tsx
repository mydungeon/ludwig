import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserProfile from "./UserProfile";

test("loads and displays UserProfile component", async () => {
  render(<UserProfile />);
  expect(screen.getByTestId("userprofile")).toBeTruthy();
});
