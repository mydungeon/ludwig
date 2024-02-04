import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import RatingForm from "./Rating";
import { MemoryRouter } from "react-router-dom";

test("loads and displays RatingForm component", async () => {
  render(
    <MemoryRouter>
      <RatingForm />
    </MemoryRouter>
  );
  expect(screen.getByTestId("wrapper-ratingForm")).toBeTruthy();
});
