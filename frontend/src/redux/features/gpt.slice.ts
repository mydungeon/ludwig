import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGptState, IGptMessage, IGptMessageHistory } from "src/redux/types";

const initialState: IGptState = {
  messages: [],
  history: [],
};

export const gptSlice = createSlice({
  initialState,
  name: "gpt",
  reducers: {
    setMessages: (state, action: PayloadAction<IGptMessage>) => {
      state.messages.unshift(action.payload);
    },
    setMessaageHistory: (state, action: PayloadAction<IGptMessageHistory>) => {
      state.history.unshift(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { setMessages, setMessaageHistory, clearMessages } =
  gptSlice.actions;

export default gptSlice.reducer;
