import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserDetails from "./UserDetails";

test("loads and displays UserDetails component", async () => {
  render(<UserDetails />);
  expect(screen.getByTestId("userDetails")).toBeTruthy();
});
