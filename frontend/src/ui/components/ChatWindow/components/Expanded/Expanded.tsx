import React from "react";
import classnames from "classnames";
import { ExpandedChatProps } from "../../ChatWindow.types";
import {
  ChatWindowHeader,
  ChatWindowBody,
  ChatWindowFooter,
} from "src/ui/components/ChatWindow/components";

export default function ExpandedChatWindow({
  isMaximized,
  isClosed,
  handleClose,
  handleMaximize,
  handleCollapse,
  receiverId,
  receiverName,
}: ExpandedChatProps) {
  return (
    <div
      className={classnames("chatWindow open", {
        max: isMaximized,
        close: isClosed,
      })}
      data-testid="chatWindow"
    >
      <ChatWindowHeader
        onClose={handleClose}
        onMinimize={handleCollapse}
        onMaximize={handleMaximize}
        maxChat={isMaximized}
        receiverName={receiverName}
      />
      <ChatWindowBody />
      <ChatWindowFooter />
    </div>
  );
}
