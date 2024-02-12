import { NextFunction, Request, Response } from "express";
import { CreateMessageInput } from "../schema/chat.schema";
import { createMessage } from "../services/chat.service";
import { getNowToUnixTimestamp } from "../utils/date";

export const getMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      status: "success",
      message: "I am alive",
    });
  } catch (error) {}
};

export const sendMessage = async (
  req: Request<
    { conversationId: string; receiver: string },
    {},
    CreateMessageInput
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const { conversationId, receiver } = req.params;
    const { user_id } = res.locals;
    const members = [];
    if (receiver) {
      members.push(receiver);
    }
    if (user_id) {
      members.push(user_id);
    }
    console.log("sendMessage");
    await createMessage(
      {
        conversationId,
        members,
        timestamp: getNowToUnixTimestamp(),
      },
      {
        sender: res.locals.user_id,
        message: req.body.message,
        timestamp: getNowToUnixTimestamp(),
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
