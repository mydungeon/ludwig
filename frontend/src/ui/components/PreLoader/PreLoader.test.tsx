import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PreLoader from "./PreLoader";

test("loads and displays PreLoader component", async () => {
  render(<PreLoader show />);
  expect(screen.getByTestId("preloader")).toBeTruthy();
});
