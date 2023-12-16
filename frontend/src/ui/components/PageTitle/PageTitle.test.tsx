import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageTitle from "./PageTitle";

test("loads and displays PageTitle component", async () => {
  render(<PageTitle pageTitleText="Test Title" />);
  expect(screen.getByTestId("pagetitle")).toBeTruthy();
});
