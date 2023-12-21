import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Backdrop from "./Backdrop";

test("loads and displays Backdrop component", async () => {
  render(<Backdrop show={true} />);
  expect(screen.getByTestId("backdrop")).toBeTruthy();
});
