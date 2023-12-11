import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteHeader from "./SiteHeader";

test("loads and displays SiteHeader component", async () => {
  render(<SiteHeader />);
  expect(screen.getByTestId("siteheader")).toBeTruthy();
});
