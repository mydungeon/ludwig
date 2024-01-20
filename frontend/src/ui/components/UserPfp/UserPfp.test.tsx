import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserPfp from "./UserPfp";

test("loads and displays UserPfp component", async () => {
  render(<UserPfp />);
  expect(screen.getByTestId("userpfp")).toBeTruthy();
});
