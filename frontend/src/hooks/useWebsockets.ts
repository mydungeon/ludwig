import { useEffect, useState } from "react";

export default function useWebsocket() {
  const [isDisconnected, setIsDisconnected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/websockets");
    ws.onopen = (e: any) => {
      ws.send(`Opening a connection`);
    };

    if (isDisconnected) {
      ws.onclose = (e: any) => {
        console.log(`Server has closed: ${e}`);
      };
    }

    if (isSending) {
      ws.onmessage = function (e: any) {
        try {
          console.log(e);
        } catch (err) {
          console.log(err);
        }
      };
    }

    if (isTyping) {
      ws.onopen = (e: any) => {
        ws.send("typing = true");
      };
    }
  }, [isDisconnected, isOpen, isSending, isTyping]);
  return {
    setIsDisconnected,
    setIsOpen,
    setIsSending,
    setIsTyping,
  };
}
