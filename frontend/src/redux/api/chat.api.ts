import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { loadMessages, loadMessage } from "../features/chat.slice";
import { IChatMessage } from "../types";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: customFetchBase,
  tagTypes: ["Chat"],
  endpoints: (builder) => ({
    getMessage: builder.query<any, any>({
      query({ chatId, messageId }) {
        return {
          credentials: "include",
          url: `chat/${chatId}/message/${messageId}`,
          method: "GET",
        };
      },
      providesTags: ["Chat"],
      transformResponse: ({ data }) => data.message,
    }),
    getMessages: builder.query<any, any>({
      query(receiver) {
        return {
          credentials: "include",
          url: `chat/messages/${receiver}`,
          method: "GET",
        };
      },
      providesTags: ["Chat"],
      transformResponse: ({ data }) => data.messages,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(loadMessages(data));
        } catch (error) {
          console.log("error", error);
        }
      },
      async onCacheEntryAdded(
        arg,
        { dispatch, updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const ws = new WebSocket("ws://localhost:8000/websockets");
        try {
          await cacheDataLoaded;
          ws.onmessage = (e: any) => {
            dispatch(loadMessage(JSON.parse(e.data)));
          };
        } catch (err) {
          console.log("error", err);
        }
        await cacheEntryRemoved;
        ws.close();
      },
    }),
    addMessage: builder.mutation<IChatMessage, any>({
      query({ data, receiver }) {
        return {
          credentials: "include",
          url: `chat/message/${receiver}`,
          method: "POST",
          body: data,
        };
      },
      transformResponse: (response: { data: IChatMessage }, meta, arg) =>
        response.data,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const ws = new WebSocket(
            `ws://localhost:8000/websockets?chatId=${data.chatId}`
          );
          ws.onopen = (e: any) => {
            ws.send(JSON.stringify(data));
          };
        } catch (error) {
          console.log("error", error);
        }
      },
      invalidatesTags: [{ type: "Chat" }],
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useLazyGetMessagesQuery,
  useAddMessageMutation,
} = chatApi;
