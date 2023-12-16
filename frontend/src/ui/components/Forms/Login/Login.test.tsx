import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "./Login";

test("loads and displays LoginForm component", async () => {
  render(<LoginForm />);
  expect(screen.getByTestId("loginForm")).toBeTruthy();
});
