import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from "./Spinner";

test("loads and displays Spinner component", async () => {
  render(<Spinner />);
  expect(screen.getByTestId("spinner")).toBeTruthy();
});
