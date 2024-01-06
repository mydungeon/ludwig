import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import Profile from "./Profile";
import { MemoryRouter } from "react-router-dom";

test("loads and displays EditProfileForm component", async () => {
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );
  expect(screen.getByTestId("wrapper-editProfileForm")).toBeTruthy();
});
