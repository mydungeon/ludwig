import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

interface Message {
  content: string;
}

export const gptApi = createApi({
  reducerPath: "gptApi",
  baseQuery: customFetchBase,
  tagTypes: ["Gpt"],
  endpoints: (builder) => ({
    createCompletions: builder.mutation<Message, Message>({
      query(data) {
        return {
          credentials: "include",
          url: "gpt/completions",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateCompletionsMutation } = gptApi;
