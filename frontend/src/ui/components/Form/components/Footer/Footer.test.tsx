import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormFooter from "./Footer";

test("loads and displays FormFooter component", async () => {
  render(<FormFooter />);
  expect(screen.getByTestId("formFooter")).toBeTruthy();
});
