import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableToolbar from "./TableToolbar";

test("loads and displays TableToolbar component", async () => {
  render(
    <TableToolbar
      columns={[]}
      filterKey=""
      handleClearFilter={() => {}}
      handleToggle={() => {}}
      onChange={(e: any) => console.log(e.target.value)}
      onClick={() => {}}
      resultCount={0}
      toggle={false}
    />
  );
  expect(screen.getByTestId("tabletoolbar")).toBeTruthy();
});
