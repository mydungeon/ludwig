import React, { useState } from "react";
import classnames from "classnames";
import {
  ChatHeaderProps,
  ChatWindowProps,
  ExpandedChatProps,
} from "./ChatWindow.types";
import { ChatMessages } from "src/ui/components";
import {
  CloseChatIcon,
  MaximizeChatIcon,
  MinimizeChatIcon,
  OpenChatIcon,
  SendChatIcon,
} from "src/ui/features/Icons";
import "./ChatWindow.styles.scss";

function ChatHeader({
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

function ChatFooter() {
  return (
    <div className="chatFooter">
      <div className="chatFooterLeft">
        <textarea className="input chat" name="chat" placeholder="Message..." />
      </div>
      <div className="chatFooterRight">
        <SendChatIcon callback={() => console.log("send a chat")} />
      </div>
    </div>
  );
}

function MinimizedChat({ handleMinimize }: { handleMinimize: () => void }) {
  return (
    <div className="chatWindow min">
      <div className="chatFooter">
        <div className="chatFooterRight">
          <OpenChatIcon callback={handleMinimize} />
        </div>
      </div>
    </div>
  );
}

function ExpandedChat({
  isMaximized,
  isClosed,
  handleClose,
  handleMaximize,
  handleMinimize,
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
      <ChatHeader
        onClose={handleClose}
        onMinimize={handleMinimize}
        onMaximize={handleMaximize}
        maxChat={isMaximized}
        receiverName={receiverName}
      />
      <div className="chatBody">
        <ChatMessages />
      </div>
      <ChatFooter />
    </div>
  );
}

export default function ChatWindow({ ...details }: ChatWindowProps) {
  const { receiverId, receiverName } = details;
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  return !isMinimized ? (
    <ExpandedChat
      handleClose={() => setIsClosed(true)}
      handleMinimize={() => setIsMinimized(true)}
      handleMaximize={() => setIsMaximized(!isMaximized)}
      isClosed={isClosed}
      isMaximized={isMaximized}
      receiverId={receiverId}
      receiverName={receiverName}
    />
  ) : (
    <MinimizedChat handleMinimize={() => setIsMinimized(false)} />
  );
}
