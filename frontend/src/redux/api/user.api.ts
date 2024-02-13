import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { IUser } from "./types";
import { UpdateRolePayloadType } from "src/ui/features/Forms/Edit/Role/Role.schema";
import { setUser } from "../features/user.slice";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customFetchBase,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<IUser, string>({
      query(userId) {
        return {
          credentials: "include",
          url: `user/${userId}`,
          method: "GET",
        };
      },
      transformResponse: (result: { data: { user: IUser } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
    updateUserRoles: builder.mutation<IUser, UpdateRolePayloadType>({
      query(data) {
        return {
          credentials: "include",
          url: "user/roles",
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: (result, error, { roles }) => [{ type: "User", roles }],
    }),
  }),
});

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useUpdateUserRolesMutation,
} = userApi;
