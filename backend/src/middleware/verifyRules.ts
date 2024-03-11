import { NextFunction, Request, Response } from "express";
import RoomModel from "../models/room.model";

const isOwner = (params: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const userID = res.locals.user._id;

    switch (params) {
      case "delete":
        if (!body.roomID || !userID)
          return res
            .status(406)
            .json({ status: "error", message: "something missed!" });
        break;
      case "edit-room-name":
        if (!body.roomID || !body.newRoomName || !userID)
          return res
            .status(406)
            .json({ status: "error", message: "something missed!" });
        break;
    }
    const room = await RoomModel.findById({ _id: body.roomID });

    if (!room)
      return res.status(404).json({ status: "error", message: "not found!" });
    let isUserOwner = false;
    room.users.forEach((user) => {
      if (user.role === "1769" && userID === user.userId) {
        isUserOwner = true;
      }
    });
    if (!isUserOwner)
      return res
        .status(403)
        .json({ status: "error", message: "you are not the owner." });
    res.locals.room = room;
    next();
  };
};

const isModerator = (params: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const userID = res.locals.user._id;

    switch (params) {
      case "invite-list":
        if (!body.invitedUserId || !userID || !body.roomID)
          return res
            .status(406)
            .json({ status: "error", message: "something missed!" });
        break;
      case "black-list":
        if (!body.bannedUserId || !userID || !body.roomID)
          return res
            .status(406)
            .json({ status: "error", message: "something missed!" });
        break;
      case "cancel-invite-list":
        if (!body.canceledUserId || !userID || !body.roomID)
          return res
            .status(406)
            .json({ status: "error", message: "something missed!" });
        break;
      case "kick-user":
        if (!body.kickedUserID || !userID || !body.roomID)
          return res
            .status(406)
            .json({ status: "error", message: "something missed!" });
        break;
    }

    const room = await RoomModel.findById({ _id: body.roomID });

    if (!room)
      return res.status(404).json({ status: "error", message: "not found!" });
    let isUserModerator = false;
    room.users.forEach((user) => {
      if (
        (user.role === "1769" || user.role === "2561") &&
        userID === user.userId
      ) {
        isUserModerator = true;
      }
    });
    if (!isUserModerator)
      return res
        .status(403)
        .json({ status: "error", message: "you are not the admin." });
    res.locals.room = room;
    next();
  };
};

export { isOwner, isModerator };
