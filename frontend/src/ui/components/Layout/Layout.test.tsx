import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import Layout from "./Layout";

test("loads and displays Layout component", async () => {
  render(<Layout />);
  expect(screen.getByTestId("layout")).toBeTruthy();
});
