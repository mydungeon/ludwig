import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./Modal";

test("loads and displays Modal component", async () => {
  render(<Modal />);
  expect(screen.getByTestId("modal")).toBeTruthy();
});
