import { createSlice } from "@reduxjs/toolkit";
import { IUiState } from "../types";

const initialState: IUiState = {
  theme: "light-theme",
};

export const uiSlice = createSlice({
  initialState,
  name: "ui",
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark-theme" ? "light-theme" : "dark-theme";
    },
  },
});

export const { toggleTheme } = uiSlice.actions;

export default uiSlice.reducer;
