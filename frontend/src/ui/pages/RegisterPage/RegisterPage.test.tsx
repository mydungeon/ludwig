import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterPage from "./RegisterPage";

test("loads and displays RegisterPage component", async () => {
  render(<RegisterPage />);
  expect(screen.getByTestId("registerpage")).toBeTruthy();
});
