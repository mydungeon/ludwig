import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import RoomModel from "../models/room.model";
import { userModel } from "../models/user.model";
import { findUser } from "../services/user.service";

const getUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  try {
    const user = await findUser({ _id: userId });
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err: any) {
    console.log("err", err);
    next(err);
  }
};

const getUserInviteList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userID = res.locals.user._id;
  const invitedRooms = await RoomModel.find({
    inviteList: { $in: [userID] },
  }).select("name _id");
  if (invitedRooms.length === 0) return res.sendStatus(404);
  return res.status(200).json(invitedRooms);
};

const getUserRooms = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userID = res.locals.user._id;
  const userName = res.locals.user.name;
  if (!userName || !userID)
    return res
      .status(406)
      .json({ status: "error", message: "something missed!" });

  const rooms = await RoomModel.find({ "users.userId": userID }).lean();
  const users = await userModel.find();
  if (!rooms) res.sendStatus(404);
  rooms.forEach((room) => {
    const inviteList: any = [];
    const blackList: any = [];
    users.forEach((user) => {
      room.inviteList.forEach((invitedUser, index) => {
        if (invitedUser.equals(user._id)) {
          inviteList.push({
            _id: user._id,
            name: user.name,
          });
        }
      });
      room.blackList.forEach((bannedUserId, index) => {
        if (bannedUserId.equals(user._id)) {
          blackList.push({
            _id: user._id,
            name: user.name,
          });
        }
      });
      room.users.forEach((roomUser) => {
        if (roomUser.userId.equals(user._id)) {
          roomUser.userName = user.name;
        }
        if (roomUser.userID === user._id && roomUser.role !== "7610") {
          delete room._doc.inviteList;
          delete room._doc.blackList;
        }
      });
    });
    room.inviteList = inviteList;
    room.blackList = blackList;
  });
  res.status(200).json(rooms);
};

const userAcceptInvite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const userID = res.locals.user._id;
  if (!body.roomID || !userID)
    return res
      .status(406)
      .json({ status: "error", message: "something missed!" });

  const isUserInRoom = await RoomModel.findOne({
    "users.userId": body.userID,
  });
  if (isUserInRoom)
    return res
      .status(404)
      .json({ status: "error", message: "user already joined" });
  const invitedRoom = await RoomModel.findOne({
    _id: body.roomID,
  });
  if (!invitedRoom)
    return res
      .status(404)
      .json({ status: "error", message: "not found any room with this id" });
  await invitedRoom._doc.inviteList.remove([userID]);
  const userData = {
    name: "",
    userId: userID,
    role: "7610",
  };
  invitedRoom.users.push(userData);
  try {
    invitedRoom.save();
    userData.name = res.locals.user.name;
    res.status(200).json({
      status: "success",
      message: "you accept the invite",
      room: invitedRoom,
    });
  } catch (error) {
    return res
      .status(408)
      .json({ status: "error", message: "cant accept invite!" });
  }
};

const userIgnoreInvite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const userID = res.locals.user._id;

  if (!body.roomID || !userID)
    return res
      .status(406)
      .json({ status: "error", message: "something missed!" });
  const invitedRoom = await RoomModel.find({
    _id: body.roomID,
  });
  if (!invitedRoom)
    return res
      .status(404)
      .json({ status: "error", message: "not found any room with this id" });
  await invitedRoom[0]._doc.inviteList.remove([userID]);
  try {
    invitedRoom[0].save();
    res.status(200).json({
      status: "success",
      message: "you accept the invite",
      roomID: body.roomID,
    });
  } catch (error) {
    return res
      .status(408)
      .json({ status: "error", message: "cant accept invite!" });
  }
};

const userSearch = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const userID = res.locals.user._id;
  if (!body.query || !body.roomID || !userID)
    return res
      .status(406)
      .json({ status: "error", message: "something missed!" });
  const inInviteListUsersID = await RoomModel.find({
    _id: body.roomID,
  }).distinct("inviteList");
  const inRoomUsersID = await RoomModel.find({ _id: body.roomID }).distinct(
    "users.userId"
  );
  const getInRoomUsersName = await userModel
    .find()
    .where("_id")
    .in([...inInviteListUsersID, ...inRoomUsersID])
    .distinct("userName")
    .exec();
  const foundedUsers = await userModel
    .find({
      $and: [
        { userName: new RegExp(body.query, "i") },
        { userName: { $not: { $in: getInRoomUsersName } } },
      ],
    })
    .select("userName _id");

  if (foundedUsers.length === 0) {
    return res.sendStatus(404);
  }
  return res.status(201).json(foundedUsers);
};

export {
  getUserHandler,
  getUserInviteList,
  getUserRooms,
  userAcceptInvite,
  userIgnoreInvite,
  userSearch,
};
