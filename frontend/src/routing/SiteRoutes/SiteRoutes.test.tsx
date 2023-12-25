import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteRouter from "src/routing/SiteRouter";
import SiteRoutes from "./SiteRoutes";

test("loads and displays SiteRoutes component", async () => {
  render(
    <SiteRouter>
      <SiteRoutes />
    </SiteRouter>
  );
  expect(screen.getByTestId("siteroutes")).toBeTruthy();
});
