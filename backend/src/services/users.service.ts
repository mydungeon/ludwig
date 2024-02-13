import { DocumentType } from "@typegoose/typegoose";
import config from "config";
import { userModel, User } from "../models/user.model";
import { signJwt } from "../utils/jwt";
import redisClient from "../utils/connectRedis";

// Find All users
export const findAllUsers = async () => {
  return await userModel.find().select("-__v");
};
