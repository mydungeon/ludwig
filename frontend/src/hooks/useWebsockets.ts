import { useEffect, useState } from "react";

export default function useWebsocket() {
  const [message, setWsMessage] = useState("");
  const [disconnect, setDisconnect] = useState(false);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/websockets");
    ws.onopen = (e: any) => {
      ws.send(`Server received your message: ${message}`);
    };

    if (disconnect) {
      ws.onclose = (e: any) => {
        console.log(`Server has closed: ${e}`);
      };
    }

    ws.onmessage = function (e: any) {
      try {
        console.log(e);
      } catch (err) {
        console.log(err);
      }
    };
  }, [disconnect, message]);
  return {
    setDisconnect,
    setWsMessage,
  };
}
