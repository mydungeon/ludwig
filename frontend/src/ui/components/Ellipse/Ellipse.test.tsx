import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Ellipse from "./Ellipse";

test("loads and displays Ellipse component", async () => {
  render(
    <Ellipse
      length={12}
      text="some really long string to test that needs to be ellipsed"
    />
  );
  expect(screen.getByTestId("ellipse")).toBeTruthy();
});
