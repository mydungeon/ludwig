import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "./Table";

test("loads and displays Table component", async () => {
  render(<Table data={{}} />);
  expect(screen.getByTestId("table")).toBeTruthy();
});
