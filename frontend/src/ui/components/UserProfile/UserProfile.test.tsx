import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

test("loads and displays UserProfile component", async () => {
  render(
    <UserProfile
      details={{ name: "test", email: "test", rating: 20, roles: [] }}
    />
  );
  expect(screen.getByTestId("userprofile")).toBeTruthy();
});
