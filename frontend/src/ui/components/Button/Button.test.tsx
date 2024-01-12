import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

test("loads and displays Button component", async () => {
  render(
    <Button buttonText="Test Click" onClick={() => console.log("test")} />
  );
  expect(screen.getByTestId("button")).toBeTruthy();
});
