import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatSender from "./ChatSender";

test("loads and displays ChatSender component", async () => {
  render(<ChatSender isUser={true} />);
  expect(screen.getByTestId("chatSender")).toBeTruthy();
});
