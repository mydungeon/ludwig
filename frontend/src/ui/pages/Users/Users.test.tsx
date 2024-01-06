import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Users from "./Users";

test("loads and displays Users component", async () => {
  render(<Users />);
  expect(screen.getByTestId("users")).toBeTruthy();
});
