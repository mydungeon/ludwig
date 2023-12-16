import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfilePage from "./Profile";

test("loads and displays ProfilePage component", async () => {
  render(<ProfilePage />);
  expect(screen.getByTestId("profilePage")).toBeTruthy();
});
