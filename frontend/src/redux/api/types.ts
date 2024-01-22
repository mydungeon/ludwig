export interface IMessage {
  content: string;
}
export interface IGptState {
  messages: IMessage[] | [];
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
