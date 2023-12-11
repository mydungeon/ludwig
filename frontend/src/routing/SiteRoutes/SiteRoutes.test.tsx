import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteRoutes from "./SiteRoutes";

test("loads and displays SiteRoutes component", async () => {
  render(<SiteRoutes />);
  expect(screen.getByTestId("siteroutes")).toBeTruthy();
});
