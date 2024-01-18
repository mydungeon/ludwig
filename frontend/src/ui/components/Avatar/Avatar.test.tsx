import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteRouter from "src/routing/SiteRouter";
import Avatar from "./Avatar";

test("loads and displays Avatar component", async () => {
  render(
    <SiteRouter>
      <Avatar to="/test" userName="Jon" />
    </SiteRouter>
  );
  expect(screen.getByTestId("avatar")).toBeTruthy();
});
