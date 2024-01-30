import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {
  clearMessages,
  setMessaageHistory,
} from "src/redux/features/gpt.slice";
import { ChatHistoryMenu } from "./Chat.types";
import { Button, Icon, Wrapper } from "src/ui/components";
import { HistoryItem } from "./components";
import "./Chat.styles.scss";

export default function ChatMenu() {
  const dispatch = useDispatch();
  const history = useSelector((state: any) => {
    const { gptState } = state;
    return gptState.history;
  });
  const messages = useSelector((state: any) => {
    const { gptState } = state;
    return gptState.messages;
  });
  function clickHandler() {
    dispatch(
      setMessaageHistory({
        title: messages[messages.length - 1].content,
        messages,
      })
    );
    dispatch(clearMessages());
  }
  return (
    <div className="chatMenu" data-testid="chatsMenu">
      <Button
        buttonText={ChatHistoryMenu.NEW_CHAT}
        classNames="addNewChat"
        onClick={clickHandler}
        disabled={messages.length === 0}
      >
        <Icon icon={faPenToSquare} />
      </Button>
      {history.length > 0 ? (
        <>
          <h3>{ChatHistoryMenu.TITLE}</h3>
          <ul>
            {history.map(({ title }: { title: string }, index: number) => (
              <HistoryItem key={index} title={title} />
            ))}
          </ul>
        </>
      ) : (
        <Wrapper classNames="chatHistory">
          <div>{`No Chat History`}</div>
        </Wrapper>
      )}
    </div>
  );
}
