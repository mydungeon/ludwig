import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterInput from "./FilterInput";

test("loads and displays FilterInput component", async () => {
  render(
    <FilterInput handleToggle={() => {}} onChange={(e) => console.log(e)} />
  );
  expect(screen.getByTestId("filterInput")).toBeTruthy();
});
