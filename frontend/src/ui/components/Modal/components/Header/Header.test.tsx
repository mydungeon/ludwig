import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalHeader from "./Header";

test("loads and displays ModalHeader component", async () => {
  render(<ModalHeader />);
  expect(screen.getByTestId("modalHeader")).toBeTruthy();
});
