import React from "react";
import { render, screen } from "src/testing/Testing.utils";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import HeaderSidebarChatLayout from "./HeaderSidebarChat";

test("loads and displays HeaderSidebarChatLayout component", async () => {
  render(
    <MemoryRouter>
      <HeaderSidebarChatLayout />
    </MemoryRouter>
  );
  expect(screen.getByTestId("headerSidebarChatLayout")).toBeTruthy();
});
