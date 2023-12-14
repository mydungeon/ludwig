import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorMessage from "./ErrorMessage";

test("loads and displays ErrorMessage component", async () => {
  render(<ErrorMessage errorText="wrong value" />);
  expect(screen.getByTestId("errormessage")).toBeTruthy();
});
