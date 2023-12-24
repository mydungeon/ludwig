import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderSidebarLayout from "./HeaderSidebar";

test("loads and displays HeaderSidebarLayout component", async () => {
  render(<HeaderSidebarLayout />);
  expect(screen.getByTestId("headerSidebarLayout")).toBeTruthy();
});
