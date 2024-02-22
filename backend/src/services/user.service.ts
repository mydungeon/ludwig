import { NextFunction } from "express";
import { FilterQuery, QueryOptions } from "mongoose";
import { userModel, User } from "../models/user.model";

// Find one user by any fields
export const findUser = async (
  query: FilterQuery<User>,
  options: QueryOptions = {}
) => {
  return await userModel.findOne(query, {}, options);
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
