import React from "react";
import { ChatMenu, ChatsProps } from "./Chats.types";
import { Button, Icon, Wrapper } from "src/ui/components";
import { HistoryItem } from "./components";
import "./Chats.styles.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function ChatsMenu({ chats }: ChatsProps) {
  const history = useSelector((state: any) => {
    const { gptState } = state;
    return gptState.history;
  });
  function clickHandler() {
    console.log("add new chat");
  }
  return (
    <div className="chatsMenu" data-testid="chatsMenu">
      <Button
        buttonText="Add New Chat"
        classNames="addNewChat"
        onClick={clickHandler}
      >
        <Icon icon={faPlus} />
      </Button>
      {history.length > 0 ? (
        <>
          <h3>{ChatMenu.TITLE}</h3>
          <ul>
            {history.map((chat: any, index: number) => (
              <HistoryItem key={index} title={chat} />
            ))}
          </ul>
        </>
      ) : (
        <Wrapper classNames="chatHistory">
          <div>{`No Chats`}</div>
        </Wrapper>
      )}
    </div>
  );
}
