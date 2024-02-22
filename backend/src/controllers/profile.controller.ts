import { NextFunction, Request, Response } from "express";
import { updateUser } from "../services/profile.service";
import { UpdateRatingInput, UpdateUserInput } from "../schema/user.schema";
import { getNowToUnixTimestamp } from "../utils/date";

export const getMeHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
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

export const updateMeHandler = async (
  req: Request<{}, {}, UpdateUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.user._id;
    const user = await updateUser(
      id,
      { ...req.body, updatedAt: getNowToUnixTimestamp() },
      next
    );
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

export const updateRatingHandler = async (
  req: Request<{}, {}, UpdateRatingInput>,
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
      message: "You have successfully updated your rating",
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
