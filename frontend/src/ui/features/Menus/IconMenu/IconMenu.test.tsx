import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import IconMenu from "./IconMenu";

test("loads and displays IconMenu component", async () => {
  render(
    <MemoryRouter>
      <IconMenu menuItems={[]} title="Test Menu" />
    </MemoryRouter>
  );
  expect(screen.getByTestId("profile")).toBeTruthy();
});
