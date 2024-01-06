import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "./Login";

test("loads and displays LoginForm component", async () => {
  render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  );
  expect(screen.getByTestId("wrapper-loginForm")).toBeTruthy();
});
