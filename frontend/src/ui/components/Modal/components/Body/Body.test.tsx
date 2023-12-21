import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalBody from "./Body";

test("loads and displays ModalBody component", async () => {
  render(<ModalBody />);
  expect(screen.getByTestId("modalBody")).toBeTruthy();
});
