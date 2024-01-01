import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditRoleForm from "./Role";

test("loads and displays EditRoleForm component", async () => {
  render(<EditRoleForm />);
  expect(screen.getByTestId("editRoleForm")).toBeTruthy();
});
