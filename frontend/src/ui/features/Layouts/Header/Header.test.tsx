import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderLayout from "./Header";

test("loads and displays HeaderLayout component", async () => {
  render(<HeaderLayout />);
  expect(screen.getByTestId("headerLayout")).toBeTruthy();
});
