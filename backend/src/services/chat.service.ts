import { ObjectId } from "mongoose";
import { Message, chatModel, messageModel } from "../models/chat.model";
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
    return chat;
  } catch (error) {
    console.log("createMessage error", error);
  }
};

export const findMessage = async (params: { chatId: string; id: string }) => {
  try {
    const { chatId, id: _id } = params;
    let chat = await messageModel.findOne({ chatId, _id }).select("-__v");
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
    let chat = await chatModel.findOne({ members: { $in: members } });
    message = {
      ...message,
      chatId: chat!._id,
      createdAt: getNowToUnixTimestamp(),
      updatedAt: getNowToUnixTimestamp(),
    };
    let created = await messageModel.create(message);
    return created;
  } catch (error) {
    console.log("createMessage error", error);
  }
};
