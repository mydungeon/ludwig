import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./Logo";

test("loads and displays Logo component", async () => {
  render(<Logo logoText="Test" />);
  expect(screen.getByTestId("logo")).toBeTruthy();
});
