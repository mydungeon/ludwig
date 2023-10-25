import { NextFunction, Request, Response } from "express";

export const getTestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      status: "success",
      data: "test back",
    });
  } catch (err: any) {
    next(err);
  }
};
