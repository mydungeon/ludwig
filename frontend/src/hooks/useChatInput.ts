import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateCompletionsMutation } from "src/redux/api/gpt.api";
import { setMessages } from "src/redux/features/gpt.slice";
import { Gpt } from "src/ui/components";

export default function useChatInput() {
  let messages = useSelector((state: any) => {
    const { gptState } = state;
    return gptState.messages;
  });
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const [createCompletions] = useCreateCompletionsMutation();

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  function handleSubmit() {
    const message = { content: value, role: Gpt.ROLES.USER };
    if (messages.length > 0) {
      messages = [...messages, message];
    } else {
      const initial = { content: Gpt.PROMPTS.INITIAL, role: Gpt.ROLES.SYSTEM };
      messages = [initial, message];
    }
    dispatch(setMessages(message));
    createCompletions({ messages });
    setValue("");
  }

  function handleKeyDown(e: any) {
    if (value.trim() === "") {
      setValue("");
      return;
    }
    if (e.key === "Enter") {
      handleSubmit();
    }
  }
  return {
    handleChange,
    handleKeyDown,
    handleSubmit,
    value,
  };
}
