import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AdminPage from "./Admin";

test("loads and displays AdminPage component", async () => {
  render(<AdminPage />);
  expect(screen.getByTestId("adminPage")).toBeTruthy();
});
