import { NextFunction, Request, Response } from "express";
import { CreateMessageInput } from "../schema/chat.schema";
import { createMessage, getChat } from "../services/chat.service";
import { getNowToUnixTimestamp } from "../utils/date";

export const getMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { chatId, receiver } = req.params;
  const chat = await getChat({ chatId, receiver });
  try {
    res.status(200).json({
      status: "success",
      data: chat,
    });
  } catch (error) {
    console.log("get chat error", error);
  }
};

export const sendMessage = async (
  req: Request<{ chatId: string; receiver: string }, {}, CreateMessageInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { chatId, receiver } = req.params;
    const { _id } = res.locals.user;
    const members = [];
    if (receiver) {
      members.push(receiver);
    }
    if (_id) {
      members.push(_id.toString());
    }
    console.log("sendMessage");
    await createMessage(
      receiver,
      {
        chatId,
        members,
        timestamp: getNowToUnixTimestamp(),
      },
      {
        sender: _id,
        message: req.body.message,
        timestamp: Number(getNowToUnixTimestamp()),
      }
    );
    res.status(200).json({
      status: "success",
      message: "Message sent",
    });
  } catch (error) {
    console.log("sendMessage error", error);
  }
};
