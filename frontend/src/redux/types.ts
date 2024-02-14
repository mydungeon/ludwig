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
  _id: string;
  members: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IChatMessage {
  _id: string;
  chatId: string;
  sender: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IChatState {
  chat: IChat | null;
  messages: IChatMessage[];
}
