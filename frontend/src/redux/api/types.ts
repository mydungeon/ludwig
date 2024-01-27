export interface IMessage {
  content: string;
  role: string;
}

export interface IMessageHistory {
  index: number;
  messages: IMessage[];
}
export interface IGptState {
  messages: IMessage[];
  history: IMessageHistory[];
}
export interface IUser {
  name: string;
  email: string;
  roles: string[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
export interface IUserState {
  user: IUser | null;
  users: IUser[] | [];
}
