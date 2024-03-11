import { IRoom, IUser } from "../types";
import { UpdateRolePayloadType } from "src/ui/features/Forms/Edit/Role/Role.schema";
import {
  acceptInvite,
  ignoreInvite,
  setInviteList,
  setRooms,
  setUser,
} from "../features/user.slice";
import apiSlice from "./apiSlice";
export const userApi = apiSlice.injectEndpoints({
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
    getInviteList: builder.mutation<any, void>({
      query: () => ({
        url: "api/user/invited-list",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data: inviteList }: { data: Array<string> } =
            await queryFulfilled;
          dispatch(setInviteList(inviteList));
        } catch (error) {}
      },
    }),
    getUserRooms: builder.mutation<any, void>({
      query: () => ({
        url: "api/user/rooms",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data: rooms }: { data: IRoom[] } = await queryFulfilled;
          dispatch(setRooms(rooms));
        } catch (error) {}
      },
    }),
    acceptRoomInvite: builder.mutation({
      query: (roomID: string) => ({
        url: "api/user/accept-invite",
        method: "POST",
        body: { roomID },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(acceptInvite({ room: data.room, roomID: data.room._id }));
        } catch (error) {}
      },
    }),
    ignoreRoomInvite: builder.mutation({
      query: (roomID: string) => ({
        url: "api/user/ignore-invite",
        method: "POST",
        body: { roomID },
      }),
      async onQueryStarted(arg: any, { dispatch, queryFulfilled, extra }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(ignoreInvite(data.roomID));
        } catch (error) {}
      },
    }),
    userSearch: builder.mutation<void, { query: string; roomID: string }>({
      query: ({ query, roomID }) => ({
        url: "api/user/search",
        method: "POST",
        body: { query, roomID },
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useUpdateUserRolesMutation,
  useUserSearchMutation,
  useAcceptRoomInviteMutation,
  useIgnoreRoomInviteMutation,
} = userApi;
