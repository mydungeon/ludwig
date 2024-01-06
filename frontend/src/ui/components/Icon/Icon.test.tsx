import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

test("loads and displays Icon component", async () => {
  render(<Icon icon={faCoffee} size="xs" />);
  expect(screen.getByTestId("icon")).toBeTruthy();
});
