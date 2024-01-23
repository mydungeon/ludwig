import { createApi } from "@reduxjs/toolkit/query/react";
import { createEntityAdapter } from "@reduxjs/toolkit";
import customFetchBase from "./customFetchBase";
import { IMessage } from "src/redux/api/types";
import gptSlice, { setMessages } from "../features/gpt.slice";

export const gptApi = createApi({
  reducerPath: "gptApi",
  baseQuery: customFetchBase,
  tagTypes: ["Gpt"],
  endpoints: (builder) => ({
    createCompletions: builder.mutation<string, any>({
      query: (data) => {
        console.log("query started", data);
        console.log("query started");
        return {
          credentials: "include",
          url: "gpt/completions",
          method: "POST",
          body: data,
          responseHandler: async (response) => {
            return await response.text();
          },
        };
      },
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        console.log("onQueryStarted");
        // const patchResult = dispatch(
        //   gptApi.util.updateQueryData('')
        // )
        try {
          const { data } = await queryFulfilled;
          // gptApi.util.updateQueryData('', id, (draft) => {
          //   Object.assign(draft, data)
          // })
          dispatch(setMessages([{ content: data }]));
        } catch (error) {}
      },
    }),
  }),
});

export const { useCreateCompletionsMutation } = gptApi;
