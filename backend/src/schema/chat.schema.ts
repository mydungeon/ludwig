import { array, object, string, TypeOf } from "zod";

const messageSchema = object({
  sender: string({ required_error: "Sender is required" }),
  message: string({ required_error: "Message is required" })
    .min(1, "Message must be more than 1 character")
    .max(180, "Message must be less than 180 characters"),
});

export const createMessageSchema = object({
  body: messageSchema,
});

export const createChatSchema = object({
  body: object({
    members: array(string()).length(2, "Members must contain 2"),
    messages: array(messageSchema).optional(),
    message: string({ required_error: "Message is required" })
      .min(1, "Message must be more than 1 character")
      .max(180, "Message must be less than 180 characters"),
  }),
});

export type CreateMessageInput = TypeOf<typeof createMessageSchema>["body"];
