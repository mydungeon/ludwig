import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGptState, IMessage } from "src/redux/api/types";

const initialState: IGptState = {
  messages: [],
};

export const gptSlice = createSlice({
  initialState,
  name: "gpt",
  reducers: {
    setMessages: (state, action: PayloadAction<IMessage[]>) => {
      state.messages = action.payload;
    },
  },
});

export const { setMessages } = gptSlice.actions;

export default gptSlice.reducer;
