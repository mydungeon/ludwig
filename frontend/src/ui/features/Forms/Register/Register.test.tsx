import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import RegisterForm from "./Register";

test("loads and displays RegisterForm component", async () => {
  render(
    <MemoryRouter>
      <RegisterForm />
    </MemoryRouter>
  );
  expect(screen.getByTestId("wrapper-registerForm")).toBeTruthy();
});
