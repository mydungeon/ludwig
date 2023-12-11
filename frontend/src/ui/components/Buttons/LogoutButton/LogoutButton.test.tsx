import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LogoutButton from "./LogoutButton";

test("loads and displays LogoutButton component", async () => {
  render(<LogoutButton />);
  expect(screen.getByTestId("logoutbutton")).toBeTruthy();
});
