import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatInput from "./ChatInput";

test("loads and displays ChatInput component", async () => {
  render(<ChatInput />);
  expect(screen.getByTestId("chatinput")).toBeTruthy();
});
