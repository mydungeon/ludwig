import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tooltip from "./Tooltip";

test("loads and displays Tooltip component", async () => {
  render(<Tooltip id="test-id" message="test" />);
  expect(screen.getByTestId("tooltip")).toBeTruthy();
});
