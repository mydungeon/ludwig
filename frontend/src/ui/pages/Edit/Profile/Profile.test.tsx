import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditProfile from "./Profile";

test("loads and displays EditProfile component", async () => {
  render(<EditProfile />);
  expect(screen.getByTestId("editProfile")).toBeTruthy();
});
