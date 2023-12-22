import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderlessLayout from "./Headerless";

test("loads and displays HeaderlessLayout component", async () => {
  render(<HeaderlessLayout />);
  expect(screen.getByTestId("headerlessLayout")).toBeTruthy();
});
