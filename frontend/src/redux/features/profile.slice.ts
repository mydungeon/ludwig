import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IProfileState } from "src/redux/api/types";

const initialState: IProfileState = {
  profile: null,
};

export const profileSlice = createSlice({
  initialState,
  name: "profileSlice",
  reducers: {
    setProfile: (state, action: PayloadAction<IUser>) => {
      state.profile = action.payload;
    },
  },
});

export default profileSlice.reducer;

export const { setProfile } = profileSlice.actions;
