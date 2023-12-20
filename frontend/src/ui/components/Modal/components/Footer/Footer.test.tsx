import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalFooter from "./Footer";

test("loads and displays ModalFooter component", async () => {
  render(<ModalFooter />);
  expect(screen.getByTestId("modalFooter")).toBeTruthy();
});
