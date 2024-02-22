import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatWindow from "./ChatWindow";

test("loads and displays ChatWindow component", async () => {
  render(<ChatWindow receiverId="1234" receiverName="TestName" />);
  expect(screen.getByTestId("chatWindow")).toBeTruthy();
});
