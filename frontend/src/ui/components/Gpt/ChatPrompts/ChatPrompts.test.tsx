import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatPrompts from "./ChatPrompts";

test("loads and displays ChatPrompts component", async () => {
  render(<ChatPrompts />);
  expect(screen.getByTestId("chatprompts")).toBeTruthy();
});
