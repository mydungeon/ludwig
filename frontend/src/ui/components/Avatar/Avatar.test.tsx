import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Avatar from "./Avatar";

test("loads and displays Avatar component", async () => {
  render(<Avatar destination="/test" userName="Jon" />);
  expect(screen.getByTestId("avatar")).toBeTruthy();
});
