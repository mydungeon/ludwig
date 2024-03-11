import WebSocket from "ws";
import { IncomingMessage, Server } from "http";
import { parse } from "url";

// ARTICLE: https://cheatcode.co/tutorials/how-to-set-up-a-websocket-server-with-node-js-and-express
// ARTICLE: https://karlhadwen.medium.com/node-js-websocket-tutorial-real-time-chat-room-using-multiple-clients-44a8e26a953e
declare class UserWebSocket extends WebSocket {
  userId: string;
}

const wss: WebSocket.Server<typeof WebSocket, typeof IncomingMessage> =
  new WebSocket.Server({
    clientTracking: true,
    noServer: true,
    path: "/websockets",
  });

// const connections: Set<string> = new Set<string>();
export async function upgrade(server: Server) {
  server.on("upgrade", async function upgrade(req, socket, head) {
    wss.handleUpgrade(req, socket, head, function done(ws) {
      wss.emit("connection", ws, req);
    });
  });
}
// const id = parseQueryString(req.url!);
// if (!connections.has(id)) {
//   connections.add(id);
// }
// function parseQueryString(url: string) {
//   return url.split("=")[1];
// }

wss.on("connection", async function connection(ws: UserWebSocket, req) {
  ws.on("message", function message(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(`${data}`);
      }
    });
  });

  ws.on("typing", async function typing() {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.emit("user is typing");
      }
    });
  });
});
