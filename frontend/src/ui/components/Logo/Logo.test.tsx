import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteRouter from "src/routing/SiteRouter";
import Logo from "./Logo";

test("loads and displays Logo component", async () => {
  render(
    <SiteRouter>
      <Logo logoText="Test" />
    </SiteRouter>
  );
  expect(screen.getByTestId("logo")).toBeTruthy();
});
