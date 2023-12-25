import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "./Sidebar";

test("loads and displays Sidebar component", async () => {
  render(<Sidebar />);
  expect(screen.getByTestId("sidebar")).toBeTruthy();
});
