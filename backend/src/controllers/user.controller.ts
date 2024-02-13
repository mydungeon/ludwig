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

export const updateMyRolesHandler = async (
  req: Request<{}, {}, UpdateUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.user._id;
    const roles = await updateUser(
      id,
      { ...req.body, updatedAt: getNowToUnixTimestamp() },
      next
    );
    res.status(200).json({
      status: "success",
      data: {
        roles,
      },
      message: "You have successfully updated your roles",
    });
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "Update failed",
      });
    }
    next(err);
  }
};
