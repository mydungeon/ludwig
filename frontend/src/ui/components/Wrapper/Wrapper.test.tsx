import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Wrapper from "./Wrapper";

test("loads and displays Wrapper component", async () => {
  render(<Wrapper />);
  expect(screen.getByTestId("wrapper")).toBeTruthy();
});
