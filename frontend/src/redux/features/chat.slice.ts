import { createSlice } from "@reduxjs/toolkit";
import { IChatState } from "src/redux/types";
import { MOCK_CHAT } from "src/testing/data/chat/messages";
const initialState: IChatState = {
  chat: MOCK_CHAT,
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
