import React, { useState } from "react";
import { ChatWindowProps } from "./ChatWindow.types";
import { CollapsedChatWindow, ExpandedChatWindow } from "./components";
import "./ChatWindow.styles.scss";

export default function ChatWindow({ ...details }: ChatWindowProps) {
  const { receiverId, receiverName } = details;
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  return !isMinimized ? (
    <ExpandedChatWindow
      handleClose={() => setIsClosed(true)}
      handleCollapse={() => setIsMinimized(true)}
      handleMaximize={() => setIsMaximized(!isMaximized)}
      isClosed={isClosed}
      isMaximized={isMaximized}
      receiverId={receiverId}
      receiverName={receiverName}
    />
  ) : (
    <CollapsedChatWindow handleCollapse={() => setIsMinimized(false)} />
  );
}
