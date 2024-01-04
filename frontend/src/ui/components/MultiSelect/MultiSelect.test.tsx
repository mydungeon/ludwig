import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MultiSelect from "./MultiSelect";

test("loads and displays MultiSelect component", async () => {
  render(
    <MultiSelect
      options={[{ id: "" }]}
      selected={[""]}
      toggleOption={() => {}}
    />
  );
  expect(screen.getByTestId("multiselect")).toBeTruthy();
});
