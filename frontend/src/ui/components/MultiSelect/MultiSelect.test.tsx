import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MultiSelect from "./MultiSelect";

test("loads and displays MultiSelect component", async () => {
  render(
    <MultiSelect
      options={[{ id: 0, title: "test option" }]}
      selected={[0]}
      toggleOption={() => {}}
    />
  );
  expect(screen.getByTestId("multiselect")).toBeTruthy();
});
