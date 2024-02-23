import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddMessageMutation } from "src/redux/api/chat.api";

export default function useChat() {
  const { userId } = useParams();
  const [addMessage] = useAddMessageMutation();
  const [message, setMessage] = useState("");
  function handleSendMessage() {
    if (message === "") return;
    addMessage({ data: { message }, receiver: userId });
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
