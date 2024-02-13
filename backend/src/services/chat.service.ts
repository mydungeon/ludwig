import { Chat, Message, chatModel } from "../models/chat.model";

export const getChat = async (params: { chatId: string; receiver: string }) => {
  try {
    const { chatId, receiver } = params;
    let chat = await chatModel.findOne({ chatId, members: receiver });
    return chat;
  } catch (error) {
    console.log("createMessage error", error);
  }
};

export const createMessage = async (
  receiver: string,
  chat: Partial<Chat>,
  message: Partial<Message>
) => {
  try {
    console.log("createMessage");
    const { chatId } = chat;
    // const existing = await chatModel.findOne({ chatId, receiver });
    console.log("=============");
    console.log("=============");
    console.log("=============");
    console.log("message", message);
    console.log("=============");
    console.log("=============");
    console.log("=============");
    const update = await chatModel.findOneAndUpdate(
      { id: "65c98665c434d41e934eb127" },
      {
        $push: {
          messages: message as Message,
        },
      }
    );
    console.log("updatedChat", update);
    return update;
  } catch (error) {
    console.log("createMessage error", error);
  }
};
