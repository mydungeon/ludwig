import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteLink from "./SiteLink";

test("loads and displays Link component", async () => {
  render(
    <SiteLink classNames="test" destination="/test" linkText="click me" />
  );
  expect(screen.getByTestId("link")).toBeTruthy();
});
