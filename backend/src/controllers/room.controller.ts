import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import RoomModel from "../models/room.model";
import { userModel } from "../models/user.model";

const createRoom = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const userID = res.locals.user._id;
  const userName = res.locals.user.name;
  if (!body.name || !userName || !userID)
    return res
      .status(406)
      .json({ status: "error", message: "something missed!" });

  try {
    const roomName = body.name;
    const ownerUser = {
      userId: userID,
      userName: userName,
      role: "1769",
    };
    const roomData = {
      _doc: {},
      users: [ownerUser],
      message: [],
      inviteList: [],
      blackList: [],
      name: roomName,
    };
    const createdRoom = await RoomModel.create(roomData);
    res.status(201).json({
      room: createdRoom._doc,
      status: "success",
      message: "room created successfully",
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: "try again later." });
  }
};

const deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
  const room = res.locals.room;
  room.delete((error: any, result: any) => {
    if (error)
      return res
        .status(408)
        .json({ status: "error", message: "cant delete the room" });
    return res
      .status(200)
      .json({ status: "success", message: "room deleted successfully" });
  });
};

const editRoomName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const room = res.locals.room;
  room.name = body.newRoomName;
  room.save((error: any, result: any) => {
    if (error)
      return res
        .status(408)
        .json({ status: "error", message: "cant change the room name" });
    res.status(200).json({ status: "success", message: "room name changed" });
  });
};

const inviteUserToRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const room = res.locals.room;
  const { invitedUserId, invitedUserName } = body;

  let isUserOnInviteList = false;
  let isUserOnBlackList = false;
  let isAlreadyJoined = false;
  room.inviteList.forEach((userId: any) => {
    if (userId.equals(invitedUserId)) {
      isUserOnInviteList = true;
    }
  });

  if (isUserOnInviteList) {
    return res
      .status(406)
      .json({ status: "error", message: "user already invited" });
  }

  room.blackList.forEach((userId: any) => {
    if (userId.equals(invitedUserId)) {
      isUserOnBlackList = true;
    }
  });

  if (isUserOnBlackList) {
    return res
      .status(406)
      .json({ status: "error", message: "user already invited" });
  }

  room.users.forEach((user: any) => {
    if (user.userId === invitedUserId) {
      isAlreadyJoined = true;
    }
  });

  if (isAlreadyJoined) {
    return res
      .status(406)
      .json({ status: "error", message: "user already joined" });
  }

  if (!isUserOnInviteList && !isUserOnBlackList && !isAlreadyJoined) {
    room.inviteList.push(invitedUserId);
    room.save((error: any) => {
      if (error)
        return res
          .status(408)
          .json({ status: "error", message: "cant invite user" });
      return res
        .status(200)
        .json({ status: "success", message: "user invited" });
    });
  }
};

const cancelUserInvite = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const room = res.locals.room;
  const { canceledUserId } = body;

  if (room.inviteList.includes(canceledUserId)) {
    room.inviteList = room.inviteList.filter(
      (invitedUser: any) => !invitedUser.equals(canceledUserId)
    );
    room.save();
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};

const addUserToRoomBlacklist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const room = res.locals.room;
  const { bannedUserId } = body;
  console.log(room, bannedUserId);
  room.users = room.users.filter((user: any) => user.userId !== bannedUserId);
  const foundUser = await userModel
    .findOne({ _id: bannedUserId })
    .select("_id");
  room.blackList.push(foundUser!._id);
  room.save((error: any) => {
    if (error)
      return res
        .status(408)
        .json({ status: "error", message: "cant banned that user" });
    return res
      .status(200)
      .json({ status: "success", message: "user added to black list" });
  });
};

const kickUserFromRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const room = res.locals.room;
  const { kickedUserID } = body;
  room.users = room.users.filter((user: any) => user.userId !== kickedUserID);
  room.save((error: any) => {
    if (error)
      return res.status(404).json({
        status: "error",
        message: "cant kick this user from the room",
      });
    return res
      .status(200)
      .json({ status: "success", message: "user kicked successfully" });
  });
};

const unBanUser = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const room = res.locals.room;
  if (!body.roomID || !body.bannedUserId)
    return res
      .status(406)
      .json({ status: "error", message: "something missed!" });
  room.blackList = room.blackList.filter(
    (userId: any) => String(userId) !== body.bannedUserId
  );
  room.save((error: any) => {
    if (error)
      return res.status(404).json({
        status: "error",
        message: "cant unbanned this user from the room",
      });
    return res
      .status(200)
      .json({ status: "success", message: "user unbanned successfully" });
  });
};

const userLeaveRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  if (!body.roomID || !body.userID)
    return res
      .status(406)
      .json({ status: "error", message: "something missed!" });
  const foundedRoom = await RoomModel.findOne({ _id: body.roomID });
  if (foundedRoom) {
    foundedRoom.users = foundedRoom.users.filter(
      (user) => user.userId !== body.userID
    );
    try {
      foundedRoom.save();
      return res
        .status(200)
        .json({ status: "success", message: "you leave room successfully" });
    } catch (error) {
      return res
        .status(404)
        .json({ status: "error", message: "you cant leave room now!" });
    }
  } else {
    return res
      .status(404)
      .json({ status: "error", message: "cant find that room" });
  }
};

export {
  createRoom,
  deleteRoom,
  editRoomName,
  inviteUserToRoom,
  addUserToRoomBlacklist,
  cancelUserInvite,
  kickUserFromRoom,
  unBanUser,
  userLeaveRoom,
};
