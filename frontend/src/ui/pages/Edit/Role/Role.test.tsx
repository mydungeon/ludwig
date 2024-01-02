import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditRolePage from "./Role";

test("loads and displays EditRolePage component", async () => {
  render(<EditRolePage />);
  expect(screen.getByTestId("editRolePage")).toBeTruthy();
});
