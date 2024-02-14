import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { setMessages } from "../features/chat.slice";
import { IChatMessage } from "../types";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: customFetchBase,
  tagTypes: ["Chat"],
  endpoints: (builder) => ({
    getMessages: builder.query<any, any>({
      query({ chatId, receiver }) {
        return {
          credentials: "include",
          url: `chat/${chatId}/messages/${receiver}`,
          method: "GET",
        };
      },
      providesTags: ["Chat"],
    }),
    addMessage: builder.mutation<IChatMessage, any>({
      query({ chatId, receiver }) {
        return {
          credentials: "include",
          url: `chat/${chatId}/message/${receiver}`,
          method: "POST",
        };
      },
      transformResponse: (response: { data: IChatMessage }, meta, arg) =>
        response.data,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setMessages(data));
        } catch (error) {
          console.log("error", error);
        }
      },
      invalidatesTags: [{ type: "Chat", id: "LIST" }],
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useLazyGetMessagesQuery,
  useAddMessageMutation,
} = chatApi;
