import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatPlaceholder from "./ChatPlaceholder";

test("loads and displays ChatPlaceholder component", async () => {
  render(<ChatPlaceholder />);
  expect(screen.getByTestId("chatplaceholder")).toBeTruthy();
});
