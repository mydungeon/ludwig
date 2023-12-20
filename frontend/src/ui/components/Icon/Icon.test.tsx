import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Icon from "./Icon";

test("loads and displays Icon component", async () => {
  render(<Icon icon={icon({ name: "coffee", style: "regular" })} size="xs" />);
  expect(screen.getByTestId("icon")).toBeTruthy();
});
