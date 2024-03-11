import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import MessageModel from "../models/msg.model";
import RoomModel from "../models/room.model";
import { getUserJoinedChats } from "../utils/room";
import { getFormattedMessages } from "../utils/msg";

const getAllRoomMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userID = res.locals.user._id;
  const userRooms = await getUserJoinedChats(userID);
  if (userRooms.length === 0)
    return res
      .status(404)
      .json({ status: "error", message: "first joined a room!" });

  const messages = await MessageModel.find({ roomID: { $in: userRooms } });
  if (!messages)
    return res.status(404).json({ status: "error", message: "no message" });
  return res.status(201).json(messages);
};

const getRoomMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { roomID } = req.params;
  if (!roomID)
    return res
      .status(406)
      .json({ status: "error", message: "something missed!" });
  const messages = await MessageModel.find({ roomID: roomID });
  if (!messages)
    return res
      .status(404)
      .json({ status: "error", message: "no message found!" });
  return res.status(200).json(messages);
};

const getMessage = async (req: Request, res: Response, next: NextFunction) => {
  const { roomID } = req.params;
  if (!roomID)
    return res
      .status(406)
      .json({ status: "error", message: "something missed!" });
  const message = await MessageModel.find({
    roomID: roomID,
  }).sort({ updatedAt: 1 });
  if (!message)
    return res
      .status(404)
      .json({ status: "error", message: "no message found!" });
  const projectedMessages = getFormattedMessages(message);

  return res.status(200).json(projectedMessages);
};

const addMessage = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const senderID = res.locals.user._id;
  const userName = res.locals.user.name;
  const { roomID } = req.params;
  if (!roomID || !userName || !body.message || !senderID)
    return res
      .status(406)
      .json({ status: "error", message: "something missed!" });

  const isUserInRoom = await RoomModel.find({
    "users.userId": senderID,
    _id: roomID,
  });

  if (isUserInRoom.length === 0)
    return res
      .status(403)
      .json({ status: "error", message: "you aren't on this room!" });
  const saveMessage = await MessageModel.create({
    message: body.message,
    senderID,
    senderName: userName,
    roomID,
  });

  if (!saveMessage)
    return res
      .status(500)
      .json({ status: "error", message: "cant send the message" });
  return res.status(201).json({ status: "success", message: saveMessage });
};

export { getAllRoomMessages, getRoomMessages, getMessage, addMessage };
