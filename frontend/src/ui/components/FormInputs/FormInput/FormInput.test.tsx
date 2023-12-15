import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormInput from "./FormInput";

test("loads and displays FormInput component", async () => {
  render(<FormInput />);
  expect(screen.getByTestId("forminput")).toBeTruthy();
});
