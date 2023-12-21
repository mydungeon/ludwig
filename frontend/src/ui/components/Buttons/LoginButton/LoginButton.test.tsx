import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginButton from "./LoginButton";

test("loads and displays LoginButton component", async () => {
  render(<LoginButton />);
  expect(screen.getByTestId("loginbutton")).toBeTruthy();
});
