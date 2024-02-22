import { userModel } from "../models/user.model";

// Find All users
export const findAllUsers = async () => {
  return await userModel.find().select("-__v");
};
