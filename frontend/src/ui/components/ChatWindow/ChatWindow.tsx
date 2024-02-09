import React from "react";
import ChatWindowProps from "./ChatWindow.types";
import "./ChatWindow.styles.scss";

export default function ChatWindow({ children }: ChatWindowProps) {
  return (
    <div className="chatWindow" data-testid="chatWindow">
      <div className="chatHeader">Header</div>
      <div className="chatBody">Body</div>
      <div className="chatFooter">Footer</div>
    </div>
  );
}
