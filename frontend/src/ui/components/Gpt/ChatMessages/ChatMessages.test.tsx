import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatMessages from "./ChatMessages";

test("loads and displays ChatMessages component", async () => {
  render(<ChatMessages messages={[]} userName="test" />);
  expect(screen.getByTestId("chatmessages")).toBeTruthy();
});
