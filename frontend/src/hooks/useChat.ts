import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddMessageMutation } from "src/redux/api/chat.api";
import useWebsocket from "./useWebsocket";

export default function useChat() {
  const { userId } = useParams();
  const [addMessage] = useAddMessageMutation();
  const [message, setMessage] = useState("");
  const { setWsMessage } = useWebsocket();
  function handleSendMessage() {
    addMessage({ data: { message }, receiver: userId });
    setWsMessage(message);
    setMessage("");
  }

  function handleOnChange(e: any) {
    setMessage(e.target.value);
  }

  return {
    handleSendMessage,
    handleOnChange,
    message,
  };
}
