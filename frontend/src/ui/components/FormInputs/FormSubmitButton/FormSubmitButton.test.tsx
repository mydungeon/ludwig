import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormSubmitButton from "./FormSubmitButton";

test("loads and displays FormSubmitButton component", async () => {
  render(<FormSubmitButton buttonText="Click Me" />);
  expect(screen.getByTestId("formsubmitbutton")).toBeTruthy();
});
