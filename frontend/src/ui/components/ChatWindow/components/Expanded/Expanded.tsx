import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classnames from "classnames";
import { useAuth, useChat } from "src/hooks";
import { createWss, debounce } from "src/utils";
import { ExpandedChatProps } from "src/ui/components/ChatWindow/ChatWindow.types";
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
  const [webSocket, setWebSocket] = useState<WebSocket>();
  const { userIdCookie } = useAuth();
  const { userId } = useParams();
  const {
    handleIsTyping,
    handleOnChange,
    handleSendMessage,
    isTyping,
    message,
    setIsTyping,
  } = useChat();

  useEffect(() => {
    if (!webSocket) {
      setWebSocket(createWss());
    }
    if (webSocket && webSocket.readyState === webSocket.OPEN) {
      webSocket.onopen = (e: any) => {
        webSocket.send(JSON.stringify("server connection is open"));
      };

      webSocket.onmessage = debounce((e: any) => {
        if (userIdCookie()._id !== userId) {
          if (e.data.includes("isTyping:false")) {
            setIsTyping(true);
            handleIsTyping();
          }
        }
      }, 500);
    }
  }, [handleIsTyping, isTyping, setIsTyping, userId, userIdCookie, webSocket]);

  async function handleOnChangeWs(e: any) {
    handleOnChange(e);
    webSocket!.send(JSON.stringify(`isTyping:${isTyping}`));
  }
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
      <ChatWindowBody isTyping={isTyping} />
      <ChatWindowFooter
        handleOnChange={handleOnChangeWs}
        handleSendMessage={handleSendMessage}
        message={message}
      />
    </div>
  );
}
