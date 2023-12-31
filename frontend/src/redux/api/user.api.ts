import { createApi } from "@reduxjs/toolkit/query/react";
import { setUser } from "src/redux/features/user.slice";
import customFetchBase from "./customFetchBase";
import { IUser } from "./types";
import { UpdatePayloadType } from "src/ui/features/Forms/Edit/Profile/Profile.schema";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customFetchBase,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query<IUser, null>({
      query() {
        return {
          url: "users/me",
          credentials: "include",
        };
      },
      transformResponse: (result: { data: { user: IUser } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("onQueryStarted getMe", data);
          dispatch(setUser(data));
        } catch (error) {}
      },
      providesTags: ["User"],
    }),
    updateMe: builder.mutation<IUser, UpdatePayloadType>({
      query(data) {
        console.log("data", data);
        return {
          credentials: "include",
          url: "users/me",
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: (result, error, { name, email }) => [
        { type: "User", name, email },
      ],
    }),
  }),
});

export const { useUpdateMeMutation, useGetMeQuery, useLazyGetMeQuery } =
  userApi;
