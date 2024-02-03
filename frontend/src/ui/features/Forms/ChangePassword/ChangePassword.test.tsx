import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ChangePasswordForm from "./ChangePassword";

test("loads and displays ChangePasswordForm component", async () => {
  render(
    <MemoryRouter>
      <ChangePasswordForm />
    </MemoryRouter>
  );
  expect(screen.getByTestId("wrapper-changePasswordForm")).toBeTruthy();
});
