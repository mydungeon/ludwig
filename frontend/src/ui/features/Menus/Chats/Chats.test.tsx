import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatsMenu from "./Chats";

test("loads and displays ChatsMenu component", async () => {
  render(<ChatsMenu chats={[]} />);
  expect(screen.getByTestId("chatsMenu")).toBeTruthy();
});
