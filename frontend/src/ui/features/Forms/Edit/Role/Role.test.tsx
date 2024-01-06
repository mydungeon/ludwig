import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import EditRoleForm from "./Role";

test("loads and displays EditRoleForm component", async () => {
  render(
    <MemoryRouter>
      <EditRoleForm />
    </MemoryRouter>
  );
  expect(screen.getByTestId("wrapper-editRoleForm")).toBeTruthy();
});
