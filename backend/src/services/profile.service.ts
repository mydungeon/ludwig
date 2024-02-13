import { NextFunction } from "express";
import { DocumentType } from "@typegoose/typegoose";
import { omit } from "lodash";
import { FilterQuery, QueryOptions } from "mongoose";
import config from "config";
import { userModel, User } from "../models/user.model";
import { excludedFields } from "../controllers/auth.controller";
import { signJwt } from "../utils/jwt";
import redisClient from "../utils/connectRedis";

// CreateUser service
export const createUser = async (input: Partial<User>) => {
  const user = await userModel.create(input);
  return omit(user.toJSON(), excludedFields);
};

// Find User by Id
export const findUserById = async (id: string) => {
  const user = await userModel.findById(id).lean();
  return omit(user, excludedFields);
};

// Find All users
export const findAllUsers = async () => {
  return await userModel.find().select("-__v");
};

// Find one user by any fields
export const findMe = async (
  query: FilterQuery<User>,
  options: QueryOptions = {}
) => {
  return await userModel.findOne(query, {}, options).select("+password");
};

// UpdateUser service
export const updateUser = async (
  id: string,
  input: Partial<User>,
  next: NextFunction
) => {
  try {
    const filter = { _id: id };
    const update = input;
    const updated = await userModel.findOneAndUpdate(filter, update, {
      new: true,
    });
    return updated?.toJSON();
  } catch (err: any) {
    next(err);
  }
};

// Sign Token
export const signToken = async (user: DocumentType<User>) => {
  // Sign the access token
  const access_token = signJwt({ sub: user._id }, "accessTokenPrivateKey", {
    expiresIn: `${config.get<number>("accessTokenExpiresIn")}m`,
  });

  // Sign the refresh token
  const refresh_token = signJwt({ sub: user._id }, "refreshTokenPrivateKey", {
    expiresIn: `${config.get<number>("refreshTokenExpiresIn")}m`,
  });
  // Create a Session
  redisClient.set(user._id.toString(), JSON.stringify(user), {
    EX: 60 * 60,
  });

  // Return access token
  return { access_token, refresh_token };
};
