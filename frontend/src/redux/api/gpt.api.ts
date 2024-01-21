import { createApi } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter } from "@reduxjs/toolkit";
import customFetchBase from "./customFetchBase";

interface Message {
  content: string;
}

const messagesAdapter = createEntityAdapter<Message>();

export const gptApi = createApi({
  reducerPath: "gptApi",
  baseQuery: customFetchBase,
  tagTypes: ["Gpt"],
  endpoints: (builder) => ({
    createCompletions: builder.mutation<Message, Message>({
      query: (data) => {
        return {
          credentials: "include",
          url: "gpt/completions",
          method: "POST",
          body: data,
        };
      },
      async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved }) {
        const ws = new WebSocket("ws://localhost:8080");
        try {
          await cacheDataLoaded;

          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data);
            // if (!isMessage(data) || data.channel !== arg) return;

            // updateCachedData((draft:any) => {
            //   messagesAdapter.upsertOne(draft, data);
            // });
          };

          ws.addEventListener("message", listener);
        } catch {}
        await cacheEntryRemoved;
        ws.close();
      },
    }),
  }),
});

export const { useCreateCompletionsMutation } = gptApi;
