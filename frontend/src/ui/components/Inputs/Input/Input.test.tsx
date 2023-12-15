import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";

test("loads and displays Input component", async () => {
<<<<<<< HEAD
  render(<Input inputType="text" name="test" />);
=======
  render(<Input name="test" />);
>>>>>>> c068606 (react hook form boilerplate completed - first pass)
  expect(screen.getByTestId("input")).toBeTruthy();
});
