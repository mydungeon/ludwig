import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Breadcrumbs from "./Breadcrumbs";

test("loads and displays Breadcrumbs component", async () => {
  render(<Breadcrumbs />);
  expect(screen.getByTestId("breadcrumbs")).toBeTruthy();
});
