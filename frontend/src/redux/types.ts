export interface IGptMessage {
  content: string;
  role: string;
}

export interface IGptMessageHistory {
  title: string;
  messages: IGptMessage[];
}

export interface IGptState {
  messages: IGptMessage[];
  history: IGptMessageHistory[];
}

export interface IUser {
  __v: number;
  _id: string;
  createdAt: Date;
  email: string;
  name: string;
  rating: number;
  roles: string[];
  updatedAt: Date;
  lastLoggedIn: Date;
  rooms: IRoom[];
  inviteList: TUserInviteList[];
  selectedRoomID: null | string;
  directoryIsOpen: Boolean;
  userName: string | null;
  userID: string | null;
  isCreateRoomModalShow: Boolean;
  messages: IMessage[];
}

export type TRoomUser = {
  userId: string;
  role: "1769" | "2561" | "7610";
  userName: string;
};

export type TRoomInviteList = {
  _id: string;
  name: string;
};

export type TRoomSearchUser = {
  _id: string;
  userName: string;
};
export interface IMessage {
  _id: string;
  message: string;
  senderID: string;
  senderName: string;
  roomID: string;
  createdAt: Date;
  updateAt: Date;
}

export type TRoomBlackList = TRoomInviteList;
export interface IRoom {
  blackList: TRoomBlackList[];
  inviteList: TRoomInviteList[];
  name: string;
  _id: string;
  users: TRoomUser[];
  messages: IMessage[];
}

export type TUserInviteList = {
  _id: string;
  name: string;
};

export interface IUserState {
  user: IUser | null;
}

export interface IProfileState {
  profile: IUser | null;
}

export interface IUsersState {
  users: IUser[] | [];
}

export interface IChat {
  _id: number;
  members: string[];
  createdAt: number;
  updatedAt: number;
}

export interface IChatMessage {
  _id: number;
  chatId: number;
  sender: string;
  message: string;
  createdAt: number;
  updatedAt: number;
}

export interface IChatState {
  chat: IChat | null;
  messages: IChatMessage[];
}

export interface IUiState {
  theme: string;
}
