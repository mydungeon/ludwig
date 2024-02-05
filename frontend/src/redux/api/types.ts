export interface IMessage {
  content: string;
  role: string;
}

export interface IMessageHistory {
  title: string;
  messages: IMessage[];
}
export interface IGptState {
  messages: IMessage[];
  history: IMessageHistory[];
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
  users: IUser[] | [];
}
