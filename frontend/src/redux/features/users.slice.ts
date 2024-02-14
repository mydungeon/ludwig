import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUsersState } from "src/redux/types";

const initialState: IUsersState = {
  users: [],
};

export const usersSlice = createSlice({
  initialState,
  name: "usersSlice",
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      console.log("action.payload", action.payload);
      state.users = action.payload;
    },
  },
});

export default usersSlice.reducer;

export const { setUsers } = usersSlice.actions;
