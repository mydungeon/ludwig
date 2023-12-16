import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UnauthorizedPage from "./Unauthorized";

test("loads and displays UnauthorizedPage component", async () => {
  render(<UnauthorizedPage />);
  expect(screen.getByTestId("unauthorizedPage")).toBeTruthy();
});
