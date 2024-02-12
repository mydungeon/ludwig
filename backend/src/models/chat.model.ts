import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { object } from "zod";

@modelOptions({
  schemaOptions: {
    timestamps: false,
  },
})
export class Chat {
  @prop({ required: true })
  conversationId: string;

  @prop({ type: [String] })
  members: string[];

  @prop({ ref: "Message" })
  messages?: Message[];

  @prop({ default: null })
  timestamp: EpochTimeStamp;

  @prop()
  totalMessage: number;
}

@modelOptions({
  schemaOptions: {
    timestamps: false,
  },
})
export class Message {
  @prop({ required: true })
  sender: string;

  @prop({ required: true, minlength: 8, maxLength: 180 })
  message: string;

  @prop({ default: null })
  timestamp: EpochTimeStamp;
}

const chatModel = getModelForClass(Chat);
const messageModel = getModelForClass(Message);
export { chatModel, messageModel };
