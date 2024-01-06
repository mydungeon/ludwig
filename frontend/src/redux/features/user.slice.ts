import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "src/redux/api/types";

interface IUserState {
  user: IUser | null;
  users: IUser[] | [];
}

const initialState: IUserState = {
  user: null,
  users: [],
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser, setUsers } = userSlice.actions;
