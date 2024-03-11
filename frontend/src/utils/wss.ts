import { getCookie } from "./cookie";

let wss!: WebSocket;

const _id = getCookie("_id");

export function createWss(id?: string) {
  if (wssIsOpen()) {
    return wss;
  } else {
    const channelId = `${_id}:${id}`;
    return new WebSocket(
      `ws://localhost:8000/websockets?channelId=${channelId}`
    );
  }
}

export function wssIsOpen() {
  if (!wss) return false;
  if (wss.OPEN) {
    return true;
  } else {
    return false;
  }
}
