import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterDropdown from "./FilterDropdown";

test("loads and displays FilterDropdown component", async () => {
  render(
    <FilterDropdown
      columns={[]}
      handleToggle={() => {}}
      onClick={(filterTerm) => console.log(filterTerm)}
      toggle={false}
    />
  );
  expect(screen.getByTestId("filterDropdown")).toBeTruthy();
});
