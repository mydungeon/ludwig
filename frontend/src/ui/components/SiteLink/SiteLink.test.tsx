import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteRouter from "src/routing/SiteRouter";
import SiteLink from "./SiteLink";

test("loads and displays Link component", async () => {
  render(
    <SiteRouter>
      <SiteLink classNames="test" destination="/test" linkText="click me" />
    </SiteRouter>
  );
  expect(screen.getByTestId("siteLink")).toBeTruthy();
});
