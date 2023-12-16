import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "./Login";

test("loads and displays LoginPage component", async () => {
  render(<LoginPage />);
  expect(screen.getByTestId("loginPage")).toBeTruthy();
});
