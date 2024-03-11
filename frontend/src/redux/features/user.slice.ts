import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IUserState,
  IUser,
  TUserInviteList,
  IRoom,
  TRoomUser,
  TRoomInviteList,
} from "src/redux/types";

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setRooms: (state, action) => {
      state.user!.rooms = action.payload;
    },
    setInviteList: (state, action) => {
      state.user!.inviteList = action.payload;
    },
    selectRoom: (state, action) => {
      state.user!.selectedRoomID = action.payload;
    },
    setDirectory: (state, action) => {
      state.user!.directoryIsOpen = action.payload;
    },
    setCredentials: (state, action) => {
      const { payload } = action;
      state.user!.userName = payload.userName;
      state.user!.userID = payload.userID;
    },
    acceptInvite: (state, action) => {
      const { payload } = action;
      const inviteList = state.user!.inviteList.filter(
        (invite: TUserInviteList) => invite._id !== payload.roomID
      );
      state.user!.rooms.push(payload.room);
      state.user!.inviteList = inviteList;
    },
    ignoreInvite: (state, action) => {
      const { payload } = action;
      state.user!.inviteList = state.user!.inviteList.filter(
        (invite: TUserInviteList) => invite._id !== payload
      );
    },
    addUserToRoomInviteList: (state, action) => {
      const { payload } = action;
      const roomIndex = state.user!.rooms.findIndex(
        (room: IRoom) => room._id === payload.roomID
      );
      state.user!.rooms[roomIndex].inviteList = [
        ...state.user!.rooms[roomIndex].inviteList,
        { _id: payload.id, name: payload.name },
      ];
    },
    deleteFromRoomInviteList: (state, action) => {
      const { payload } = action;
      const roomIndex = state.user!.rooms.findIndex(
        (room: IRoom) => room._id === payload.roomID
      );
      state.user!.rooms[roomIndex].inviteList = state.user!.rooms[
        roomIndex
      ].inviteList.filter(
        (invitedUser: TRoomInviteList) => invitedUser._id !== payload.userID
      );
    },
    toggleCreateRoomModal: (state) => {
      state.user!.isCreateRoomModalShow = !state.user!.isCreateRoomModalShow;
    },
    addRoom: (state, action) => {
      state.user!.rooms.push(action.payload);
    },
    addToInviteList: (state, action) => {
      const isInvited = state.user!.inviteList.find(
        (invite: TUserInviteList) => invite._id === action.payload._id
      );
      if (!isInvited) {
        state.user!.inviteList = [...state.user!.inviteList, action.payload];
      }
    },
    removeUserFromRoom: (state, action) => {
      const { payload } = action;
      const roomIndex = state.user!.rooms.findIndex(
        (room: IRoom) => room._id === payload.roomID
      );
      state.user!.rooms[roomIndex].users = state.user!.rooms[
        roomIndex
      ].users.filter((user: TRoomUser) => user.userId !== payload.userID);
    },
    removeRoom: (state, action) => {
      const { payload } = action;
      state.user!.rooms = state.user!.rooms.filter(
        (room: IRoom) => room._id !== payload
      );
    },
    userJoinedRoom: (state, action) => {
      const { payload } = action;
      const roomIndex = state.user!.rooms.findIndex(
        (room: IRoom) => room._id === payload.roomID
      );
      state.user!.rooms[roomIndex].inviteList = state.user!.rooms[
        roomIndex
      ].inviteList.filter(
        (invitedUser: TRoomInviteList) => invitedUser._id !== payload.userID
      );
      state.user!.rooms[roomIndex].users.push({
        role: "7610",
        userId: payload.userID,
        userName: payload.userName,
      });
    },
    addUserToBlackList: (state, action) => {
      const { payload } = action;
      const roomIndex = state.user!.rooms.findIndex(
        (room: IRoom) => room._id === payload.roomID
      );
      state.user!.rooms[roomIndex].blackList.push({
        _id: payload.userID,
        name: payload.userName,
      });
      state.user!.rooms[roomIndex].users = state.user!.rooms[
        roomIndex
      ].users.filter((user: TRoomUser) => user.userId !== payload.userID);
    },
    removeUserFromBlacklist: (state, action) => {
      const { payload } = action;
      const roomIndex = state.user!.rooms.findIndex(
        (room: IRoom) => room._id === payload.roomID
      );
      state.user!.rooms[roomIndex].blackList = state.user!.rooms[
        roomIndex
      ].blackList.filter((bannedUser) => bannedUser._id !== payload.userID);
    },
    changeRoomName: (state, action) => {
      const { payload } = action;
      const roomIndex = state.user!.rooms.findIndex(
        (room: IRoom) => room._id === payload.roomID
      );
      state.user!.rooms[roomIndex].name = payload.newRoomName;
    },
    setRoomMessages: (state, action) => {
      const { payload } = action;
      const roomIndex = state.user!.rooms.findIndex(
        (room: IRoom) => room._id === payload.roomID
      );
      state.user!.rooms[roomIndex].messages = payload.messages;
    },
    addRoomMessage: (state, action) => {
      const { payload } = action;
      const roomIndex = state.user!.rooms.findIndex(
        (room: IRoom) => room._id === payload.roomID
      );
      state.user!.rooms[roomIndex].messages.push(payload.newMessage);
    },
  },
});

export default userSlice.reducer;

export const {
  setUser,
  setRooms,
  setInviteList,
  selectRoom,
  setDirectory,
  setCredentials,
  acceptInvite,
  ignoreInvite,
  addUserToRoomInviteList,
  deleteFromRoomInviteList,
  toggleCreateRoomModal,
  addRoom,
  addToInviteList,
  removeUserFromRoom,
  removeRoom,
  userJoinedRoom,
  addUserToBlackList,
  removeUserFromBlacklist,
  changeRoomName,
  setRoomMessages,
  addRoomMessage,
} = userSlice.actions;
