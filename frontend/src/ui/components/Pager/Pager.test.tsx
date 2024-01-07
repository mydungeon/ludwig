import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pager from "./Pager";

test("loads and displays Pager component", async () => {
  render(
    <Pager
      className="pagerBar"
      currentPage={1}
      totalCount={200}
      pageSize={10}
      onPageChange={(page: 1) => console.log(page)}
      siblingCount={2}
    />
  );
  expect(screen.getByTestId("pager")).toBeTruthy();
});
