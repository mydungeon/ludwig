import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Role from "./Role";

test("loads and displays Role component", async () => {
  render(<Role />);
  expect(screen.getByTestId("role")).toBeTruthy();
});
