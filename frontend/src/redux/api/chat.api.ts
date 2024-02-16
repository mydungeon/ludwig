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
          dispatch(setMessages(data));
        } catch (error) {
          console.log("error", error);
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
