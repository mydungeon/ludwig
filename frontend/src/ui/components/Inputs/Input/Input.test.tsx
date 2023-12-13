import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";

test("loads and displays Input component", async () => {
  render(<Input inputType="text" name="test" />);
  expect(screen.getByTestId("input")).toBeTruthy();
});
