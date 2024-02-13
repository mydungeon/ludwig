import { NextFunction, Request, Response } from "express";
import { findUser, updateUser } from "../services/user.service";
import { UpdateUserInput } from "../schema/user.schema";
import { getNowToUnixTimestamp } from "../utils/date";

export const getUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  console.log("userId", userId);
  try {
    const user = await findUser({ _id: userId });
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err: any) {
    console.log("err", err);
    next(err);
  }
};
