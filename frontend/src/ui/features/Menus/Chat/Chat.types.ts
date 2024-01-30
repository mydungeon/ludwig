export interface ChatsProps {
  chats: string[];
  children?: JSX.Element[] | JSX.Element;
}

export enum ChatHistoryMenu {
  NEW_CHAT = "New Chat",
  TITLE = "Previous Chats",
}
