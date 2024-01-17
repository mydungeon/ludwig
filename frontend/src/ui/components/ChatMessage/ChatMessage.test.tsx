import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatMessage from "./ChatMessage";

test("loads and displays ChatMessage component", async () => {
  render(<ChatMessage message="test" />);
  expect(screen.getByTestId("chat")).toBeTruthy();
});
