import React from "react";
import { ChatMessages } from "src/ui/components";
import "./Body.styles.scss";

export default function ChatWindowBody() {
  return (
    <div className="chatBody">
      <ChatMessages />
    </div>
  );
}
