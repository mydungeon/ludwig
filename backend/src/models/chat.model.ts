import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";

@modelOptions({
  schemaOptions: {
    timestamps: false,
  },
})
export class Chat {
  @prop({ auto: true })
  _id: ObjectId;

  @prop({ type: [String] })
  members: string[];

  @prop()
  totalMessages: number;

  @prop({ default: null })
  createdAt: EpochTimeStamp;

  @prop({ default: null })
  updatedAt: EpochTimeStamp;
}

@modelOptions({
  schemaOptions: {
    timestamps: false,
  },
})
export class Message {
  @prop({ auto: true })
  _id: ObjectId;

  @prop()
  chatId: ObjectId;

  @prop({ required: true })
  sender: ObjectId;

  @prop({ required: true, minlength: 8, maxLength: 180 })
  message: string;

  @prop({ default: null })
  createdAt: EpochTimeStamp;

  @prop({ default: null })
  updatedAt: EpochTimeStamp;
}

const chatModel = getModelForClass(Chat);
const messageModel = getModelForClass(Message);
export { chatModel, messageModel };
