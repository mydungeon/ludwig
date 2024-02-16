import { createSlice } from "@reduxjs/toolkit";
import { IChatState } from "src/redux/types";
import { MOCK_CHAT } from "src/testing/data/chat/messages";
const initialState: IChatState = {
  chat: MOCK_CHAT,
  messages: [],
};

export const chatSlice = createSlice({
  initialState,
  name: "chat",
  reducers: {
    setMessages: (state, action: any) => {
      state.messages = action.payload;
    },
  },
});

export const { setMessages } = chatSlice.actions;

export default chatSlice.reducer;
