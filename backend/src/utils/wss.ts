import WebSocket from "ws";
import { IncomingMessage, Server } from "http";
import { parse } from "url";

// ARTICLE: https://cheatcode.co/tutorials/how-to-set-up-a-websocket-server-with-node-js-and-express
// ARTICLE: https://karlhadwen.medium.com/node-js-websocket-tutorial-real-time-chat-room-using-multiple-clients-44a8e26a953e
declare class MyWebSocket extends WebSocket {
  chatId: string;
}

const wss: WebSocket.Server<typeof WebSocket, typeof IncomingMessage> =
  new WebSocket.Server({
    clientTracking: true,
    noServer: true,
    path: "/websockets",
  });

export async function upgrade(server: Server) {
  server.on("upgrade", (req, socket, head) => {
    wss.handleUpgrade(req, socket, head, (websocket) => {
      wss.emit("connection", websocket, req);
    });
  });
}

wss.on("connection", function connection(ws, req) {
  ws.on("message", function message(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(`${data}`);
      }
    });
  });
});
