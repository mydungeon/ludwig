import { createApi } from "@reduxjs/toolkit/query/react";
import { setProfile } from "src/redux/features/profile.slice";
import customFetchBase from "./customFetchBase";
import { IUser } from "./types";
import { UpdatePayloadType } from "src/ui/features/Forms/Edit/Profile/Profile.schema";
import { UpdateRolePayloadType } from "src/ui/features/Forms/Edit/Role/Role.schema";
import { RatingPayloadType } from "src/ui/features/Forms/Rating/Rating.schema";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: customFetchBase,
  tagTypes: ["Profile"],
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
          dispatch(setProfile(data));
        } catch (error) {}
      },
      providesTags: ["Profile"],
    }),
    updateMe: builder.mutation<IUser, UpdatePayloadType>({
      query(data) {
        return {
          credentials: "include",
          url: "users/me",
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: (result, error, { name, email }) => [
        { type: "Profile", name, email },
      ],
    }),
    updateMyRoles: builder.mutation<IUser, UpdateRolePayloadType>({
      query(data) {
        return {
          credentials: "include",
          url: "users/me/roles",
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: (result, error, { roles }) => [
        { type: "Profile", roles },
      ],
    }),
    updateRating: builder.mutation<IUser, RatingPayloadType>({
      query(data) {
        console.log("data", data);
        return {
          credentials: "include",
          url: "users/me/rating",
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: (result, error, { rating }) => [
        { type: "Profile", rating },
      ],
    }),
  }),
});

export const {
  useGetMeQuery,
  useLazyGetMeQuery,
  useUpdateMeMutation,
  useUpdateMyRolesMutation,
  useUpdateRatingMutation,
} = profileApi;
