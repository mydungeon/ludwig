import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

test("loads and displays Form component", async () => {
  render(<Form />);
  expect(screen.getByTestId("form")).toBeTruthy();
});
