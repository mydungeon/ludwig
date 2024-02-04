import { NextFunction, Request, Response } from "express";
import { seedBulkUsers } from "../services/seed.service";
import { userSeed } from "../utils/seed";

export const seedDataHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { seedCount } = req.params;
    const seed = await userSeed(Number(seedCount));
    const bulkOperation = await seedBulkUsers(seed);
    if (bulkOperation) {
      const { insertedCount } = bulkOperation;
      res.status(200).json({
        status: "success",
        message: `Bulk operation completed for ${insertedCount} insertions`,
      });
    }
  } catch (err: any) {
    console.log("err", err);
    if (err.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "Seed bulk users failed",
      });
    }
    next(err);
  }
};
