import { Chat, Message, chatModel, messageModel } from "../models/chat.model";

// CreateUser service
export const createMessage = async (chat: Partial<Chat>, message: Message) => {
  try {
    console.log("createMessage");
    console.log("message", message);
    const { conversationId } = chat;
    let existingChat = await chatModel.findOne({ conversationId });
    if (!existingChat) {
      existingChat = await chatModel.create(chat);
    }
    existingChat?.messages?.push(message);
    existingChat.save();
    return "Ok";
  } catch (error) {
    console.log("createMessage error", error);
  }
};
