import { Server } from "http";
import WebSocket from "ws";

// ARTICLE: https://cheatcode.co/tutorials/how-to-set-up-a-websocket-server-with-node-js-and-express

export default async (server: Server) => {
  const wss = new WebSocket.Server({
    noServer: true,
    path: "/websockets",
  });

  server.on("upgrade", (request, socket, head) => {
    console.log("server is upgraded with a websocket connection");
    wss.handleUpgrade(request, socket, head, (websocket) => {
      wss.emit("connection", websocket, request);
    });
  });

  wss.on("connection", function connection(ws) {
    ws.on("message", function message(data) {
      console.log("received: %s", data);
    });

    ws.send("something");
  });

  return wss;
};
