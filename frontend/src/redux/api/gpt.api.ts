import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { setMessages } from "../features/gpt.slice";

export const gptApi = createApi({
  reducerPath: "gptApi",
  baseQuery: customFetchBase,
  tagTypes: ["GptMessages"],
  endpoints: (builder) => ({
    createCompletions: builder.mutation<any, any>({
      query: (data) => {
        return {
          credentials: "include",
          url: "gpt/completions",
          method: "POST",
          body: data,
        };
      },
      transformResponse: ({ data }) => data.choices[0].message,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setMessages(data));
        } catch (error) {
          console.log("error", error);
        }
      },
      invalidatesTags: [{ type: "GptMessages", id: "LIST" }],
    }),
  }),
});

export const { useCreateCompletionsMutation } = gptApi;
