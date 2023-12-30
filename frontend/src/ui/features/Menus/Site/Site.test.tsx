import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteMenu from "./Site";

test("loads and displays Site component", async () => {
  render(<SiteMenu />);
  expect(screen.getByTestId("site")).toBeTruthy();
});
