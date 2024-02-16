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
}

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
