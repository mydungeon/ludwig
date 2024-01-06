import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Profile from "./Profile";

test("loads and displays Profile component", async () => {
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );
  expect(screen.getByTestId("profile")).toBeTruthy();
});
