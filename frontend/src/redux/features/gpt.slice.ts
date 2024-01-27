import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGptState, IMessage, IMessageHistory } from "src/redux/api/types";

const initialState: IGptState = {
  messages: [],
  history: [],
};

export const gptSlice = createSlice({
  initialState,
  name: "gpt",
  reducers: {
    setMessages: (state, action: PayloadAction<IMessage>) => {
      state.messages.unshift(action.payload);
    },
    setMessaageHistory: (state, action: PayloadAction<IMessageHistory>) => {
      state.history.unshift(action.payload);
    },
  },
});

export const { setMessages } = gptSlice.actions;

export default gptSlice.reducer;
