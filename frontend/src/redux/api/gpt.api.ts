import { createApi } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter } from "@reduxjs/toolkit";
import customFetchBase from "./customFetchBase";
import { IMessage } from "src/redux/api/types";
import gptSlice from "../features/gpt.slice";

// const messagesAdapter = createEntityAdapter<IMessage>();

export const gptApi = createApi({
  reducerPath: "gptApi",
  baseQuery: customFetchBase,
  tagTypes: ["Gpt"],
  endpoints: (builder) => ({
    createCompletions: builder.mutation<IMessage, IMessage>({
      query: (data) => {
        console.log("query started");
        return {
          credentials: "include",
          url: "gpt/completions",
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        console.log("onQueryStarted");
        console.log("args", args);
        const ws = new WebSocket("ws://localhost:8000");
        console.log("websocket initialized");
        try {
          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data);
            console.log("listener data", data);
          };
          console.log("listener initialized");
          ws.addEventListener("message", listener);
          console.log("listner added to the web socket");
        } catch (error) {
          console.log("error", error);
        }

        await queryFulfilled;
        console.log("query fulfilled");
        ws.close();
        console.log("web socket connection closed");
      },
    }),
  }),
});

export const { useCreateCompletionsMutation } = gptApi;
