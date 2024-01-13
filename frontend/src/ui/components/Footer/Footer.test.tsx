import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

test("loads and displays Footer component", async () => {
  render(<Footer />);
  expect(screen.getByTestId("footer")).toBeTruthy();
});
