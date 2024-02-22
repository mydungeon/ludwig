import React from "react";
import { ChatHeaderProps } from "../../ChatWindow.types";
import {
  CloseChatIcon,
  MaximizeChatIcon,
  MinimizeChatIcon,
} from "src/ui/features/Icons";
import "./Header.styles.scss";

export default function ChatWindowHeader({
  onClose,
  onMinimize,
  onMaximize,
  maxChat,
  receiverName,
}: ChatHeaderProps) {
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <CloseChatIcon callback={onClose} />
        <MinimizeChatIcon callback={onMinimize} />
        <MaximizeChatIcon callback={onMaximize} toggle={maxChat} />
      </div>
      <div className="chatHeaderRight">{receiverName}</div>
    </div>
  );
}
