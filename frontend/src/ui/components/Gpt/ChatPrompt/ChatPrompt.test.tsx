import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatPrompt from "./ChatPrompt";

test("loads and displays ChatPrompts component", async () => {
  render(<ChatPrompt prompt="test" />);
  expect(screen.getByTestId("chatprompts")).toBeTruthy();
});
