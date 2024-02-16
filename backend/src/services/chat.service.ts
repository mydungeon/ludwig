import { ObjectId } from "mongoose";
import { Chat, Message, chatModel, messageModel } from "../models/chat.model";
import { getNowToUnixTimestamp } from "../utils/date";

export const findOrCreateChat = async (params: { members: string[] }) => {
  try {
    const { members } = params;
    let chat = await chatModel.findOneAndUpdate(
      { members: { $in: members } },
      { members },
      {
        new: true,
        upsert: true,
      }
    );
    return chat;
  } catch (error) {
    console.log("createMessage error", error);
  }
};

export const findMessages = async (params: { chatId: ObjectId }) => {
  try {
    const { chatId } = params;
    let chat = await messageModel.find({ chatId }).select("-__v");
    console.log("============");
    console.log("============");
    console.log("============");
    console.log("chat", chat);
    console.log("============");
    console.log("============");
    return chat;
  } catch (error) {
    console.log("createMessage error", error);
  }
};

export const createMessage = async (
  params: { members: string[] },
  message: Partial<Message>
) => {
  try {
    const { members } = params;
    console.log("members", members);
    let chat = await chatModel.findOne({ members });
    message = {
      ...message,
      chatId: chat!._id,
      createdAt: getNowToUnixTimestamp(),
      updatedAt: getNowToUnixTimestamp(),
    };
    console.log("message", message);
    let created = await messageModel.create(message);
    return created;
  } catch (error) {
    console.log("createMessage error", error);
  }
};
