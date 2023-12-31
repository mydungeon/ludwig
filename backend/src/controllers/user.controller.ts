import { NextFunction, Request, Response } from "express";
import { findAllUsers, updateUser } from "../services/user.service";
import { UpdateUserInput } from "../schema/user.schema";

export const getMeHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    console.log("get me", user);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await findAllUsers();
    res.status(200).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateMeHandler = async (
  req: Request<{}, {}, UpdateUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.user._id;
    const user = await updateUser(id, req.body, next);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
      message: "You have successfully updated user",
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
