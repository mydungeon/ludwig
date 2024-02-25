import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { loadMessages, loadMessage } from "../features/chat.slice";
import { IChatMessage } from "../types";
import { createWss } from "src/utils/wss";

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
      async onCacheEntryAdded(arg, { dispatch, cacheDataLoaded }) {
        try {
          await cacheDataLoaded;
          const ws = createWss(arg);
          ws.onmessage = (e: any) => {
            dispatch(loadMessage(JSON.parse(e.data)));
          };
        } catch (err) {
          console.log("error", err);
        }
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
      async onQueryStarted(args, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (!data) return;
          const ws = createWss(data._id.toString());
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
