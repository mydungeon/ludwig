import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddMessageMutation } from "src/redux/api/chat.api";
import { debounce } from "src/utils";

export default function useChat() {
  const { userId } = useParams();
  const [addMessage] = useAddMessageMutation();
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  function handleSendMessage() {
    if (message.trim() === "") return;
    addMessage({ data: { message }, receiver: userId });
    setMessage("");
  }

  function handleOnChange(e: any) {
    setMessage(e.target.value);
  }

  const handleIsTyping = debounce(function () {
    setIsTyping(false);
  }, 1000);

  return {
    handleIsTyping,
    handleOnChange,
    handleSendMessage,
    isTyping,
    message,
    setIsTyping,
  };
}
