import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./Page";

test("loads and displays Page component", async () => {
  render(<Page />);
  expect(screen.getByTestId("page")).toBeTruthy();
});
