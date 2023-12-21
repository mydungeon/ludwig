import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: "light-theme",
  reducers: {
    toggleTheme: (state: string) => {
      return state === "dark-theme" ? "light-theme" : "dark-theme";
    },
  },
});

export const { toggleTheme } = uiSlice.actions;

export default uiSlice.reducer;
