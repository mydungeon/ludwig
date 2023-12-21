import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from "./Register";

test("loads and displays RegisterPage component", async () => {
  render(<Register />);
  expect(screen.getByTestId("registerPage")).toBeTruthy();
});
