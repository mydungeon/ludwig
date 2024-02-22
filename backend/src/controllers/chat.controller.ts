import { NextFunction, Request, Response } from "express";
import { CreateMessageInput } from "../schema/chat.schema";
import {
  createMessage,
  findMessages,
  findMessage,
  findOrCreateChat,
} from "../services/chat.service";

export const getMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { receiver } = req.params;
    const sender = res.locals.user._id;
    const chat = await findOrCreateChat({ members: [sender, receiver] });
    let messages;
    if (chat) {
      messages = await findMessages({ chatId: chat?._id });
    }
    const data = {
      status: "success",
      data: { chat, messages },
    };
    res.status(200).json(data);
  } catch (error) {
    console.log("get chat error", error);
  }
};

export const getMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { chatId, id } = req.params;
    const message = await findMessage({ chatId, id });
    const data = {
      status: "success",
      data: message,
    };
    res.status(200).json(data);
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
    const { receiver } = req.params;
    const sender = res.locals.user._id;
    const message = await createMessage(
      { members: [sender, receiver] },
      {
        sender,
        message: req.body.message,
      }
    );
    res.status(200).json({
      status: "success",
      data: message,
    });
  } catch (error) {
    console.log("sendMessage error", error);
  }
};
