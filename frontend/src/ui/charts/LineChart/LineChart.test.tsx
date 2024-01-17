import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LineChart from "./LineChart";
import { lineChartData } from "src/testing/data/charts/lineChart";

test("loads and displays LineChart component", async () => {
  render(<LineChart data={lineChartData} width={400} height={400} />);
  expect(screen.getByTestId("linechart")).toBeTruthy();
});
