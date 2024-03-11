import React from "react";
import { ChatMessages } from "src/ui/components";
import "./Body.styles.scss";

export default function ChatWindowBody({ isTyping }: { isTyping: boolean }) {
  return (
    <div className="chatBody">
      <ChatMessages isTyping={isTyping} />
    </div>
  );
}
