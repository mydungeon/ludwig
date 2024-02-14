import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IChatMessage, IChatState } from "src/redux/types";

const initialState: IChatState = {
  chat: null,
  messages: [],
};

export const chatSlice = createSlice({
  initialState,
  name: "chat",
  reducers: {
    setMessages: (state, action: PayloadAction<IChatMessage>) => {
      state.messages.unshift(action.payload);
    },
  },
});

export const { setMessages } = chatSlice.actions;

export default chatSlice.reducer;
