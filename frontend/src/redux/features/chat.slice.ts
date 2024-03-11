import { createSlice } from "@reduxjs/toolkit";
import { IChatState } from "src/redux/types";
const initialState: IChatState = {
  chat: null,
  messages: [],
};

export const chatSlice = createSlice({
  initialState,
  name: "chatSlice",
  reducers: {
    loadMessages: (state, action: any) => {
      state.messages = action.payload;
    },
    loadMessage: (state, action: any) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { loadMessages, loadMessage } = chatSlice.actions;

export default chatSlice.reducer;
