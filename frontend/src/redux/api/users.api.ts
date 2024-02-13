import { createApi } from "@reduxjs/toolkit/query/react";
import { setUsers } from "src/redux/features/users.slice";
import customFetchBase from "./customFetchBase";
import { IUser } from "./types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: customFetchBase,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query() {
        return {
          url: "users",
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (result: { data: { users: IUser[] } }) =>
        result.data.users,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUsers(data));
        } catch (error) {}
      },
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = usersApi;
