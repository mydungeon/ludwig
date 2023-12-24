import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteSidebar from "./SiteSidebar";

test("loads and displays SiteSidebar component", async () => {
  render(<SiteSidebar />);
  expect(screen.getByTestId("sitesidebar")).toBeTruthy();
});
