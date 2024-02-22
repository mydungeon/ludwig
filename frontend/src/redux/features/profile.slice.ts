import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IProfileState } from "src/redux/types";

const initialState: IProfileState = {
  profile: null,
};

export const profileSlice = createSlice({
  initialState,
  name: "profileSlice",
  reducers: {
    logout: () => initialState,
    setProfile: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload;
    },
  },
});

export default profileSlice.reducer;

export const { logout, setProfile } = profileSlice.actions;
