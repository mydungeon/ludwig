import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserRoles from "./UserRoles";

test("loads and displays UserRoles component", async () => {
  render(<UserRoles roles={[]} />);
  expect(screen.getByTestId("userRoles")).toBeTruthy();
});
