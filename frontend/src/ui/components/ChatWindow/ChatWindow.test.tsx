import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatWindow from "./ChatWindow";

test("loads and displays ChatWindow component", async () => {
  render(<ChatWindow />);
  expect(screen.getByTestId("chatWindow")).toBeTruthy();
});
