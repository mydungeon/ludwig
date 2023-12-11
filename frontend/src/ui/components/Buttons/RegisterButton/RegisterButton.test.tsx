import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterButton from "./RegisterButton";

test("loads and displays RegisterButton component", async () => {
  render(<RegisterButton />);
  expect(screen.getByTestId("registerbutton")).toBeTruthy();
});
