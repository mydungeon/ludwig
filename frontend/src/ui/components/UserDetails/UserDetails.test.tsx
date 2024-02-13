import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "src/testing/Testing.utils";
import UserDetails from "./UserDetails";

test("loads and displays UserDetails component", async () => {
  render(<UserDetails details={{ name: "test", email: "test", rating: 20 }} />);
  expect(screen.getByTestId("userDetails")).toBeTruthy();
});
