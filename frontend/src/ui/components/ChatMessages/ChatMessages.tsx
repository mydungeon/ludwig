import React, { useEffect } from "react";
import "./ChatMessages.styles.scss";
import { useLazyGetMessagesQuery } from "src/redux/api/chat.api";
import { useSelector } from "react-redux";

export default function ChatMessages() {
  const { myId, userId, messages } = useSelector(
    ({
      profileState: {
        profile: { _id: myId },
      },
      userState: {
        user: { _id: userId },
      },
      chatState: { messages },
    }: any) => ({ myId, userId, messages })
  );

  const [getMessages, { isSuccess }] = useLazyGetMessagesQuery();

  useEffect(() => {
    async function getMessagesAsync() {
      await getMessages(userId);
    }
    getMessagesAsync();
  }, [getMessages, isSuccess, userId]);

  return messages && messages.length > 0 ? (
    <div className="chatMessages" data-testid="chatMessages">
      {messages.map(({ sender, message }: any, index: number) => {
        const className =
          sender === myId ? "chatMessage sender" : "chatMessage receiver";
        return (
          <div className={className} key={index}>
            <span>{message}</span>
          </div>
        );
      })}
    </div>
  ) : (
    <div>No chat messages</div>
  );
}
