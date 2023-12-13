import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SubmitButton from "./SubmitButton";

test("loads and displays SubmitButton component", async () => {
  render(<SubmitButton buttonText="Click Me" />);
  expect(screen.getByTestId("submitButton")).toBeTruthy();
});
