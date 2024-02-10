import React, { useState } from "react";
import classnames from "classnames";
import ChatWindowProps from "./ChatWindow.types";
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
}: {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  maxChat: boolean;
}) {
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <CloseChatIcon callback={onClose} />
        <MinimizeChatIcon callback={onMinimize} />
        <MaximizeChatIcon callback={onMaximize} toggle={maxChat} />
      </div>
      <div className="chatHeaderRight">Jonny Dungeons</div>
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

function MinimizedChat({ onMinimize }: { onMinimize: () => void }) {
  return (
    <div className="chatWindow min">
      <div className="chatFooter">
        <div className="chatFooterRight">
          <OpenChatIcon callback={onMinimize} />
        </div>
      </div>
    </div>
  );
}

export default function ChatWindow({ children }: ChatWindowProps) {
  const [closeChat, setCloseChat] = useState(false);
  const [minChat, setMinChat] = useState(true);
  const [maxChat, setMaxChat] = useState(false);

  return !minChat ? (
    <div
      className={classnames("chatWindow open", {
        max: maxChat,
        close: closeChat,
      })}
      data-testid="chatWindow"
    >
      <ChatHeader
        onClose={() => setCloseChat(true)}
        onMinimize={() => setMinChat(true)}
        onMaximize={() => setMaxChat(!maxChat)}
        maxChat={maxChat}
      />
      <div className="chatBody">
        <ChatMessages />
      </div>
      <ChatFooter />
    </div>
  ) : (
    <MinimizedChat onMinimize={() => setMinChat(false)} />
  );
}
