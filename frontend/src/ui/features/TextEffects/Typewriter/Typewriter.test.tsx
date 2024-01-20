import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TypewriterTextEffect from "./Typewriter";

test("loads and displays TypewriterTextEffect component", async () => {
  render(<TypewriterTextEffect />);
  expect(screen.getByTestId("typewriter")).toBeTruthy();
});
