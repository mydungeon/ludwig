import { NextFunction, Request, Response } from "express";
import OpenAi from "openai";
import config from "config";

// https://platform.openai.com/docs/guides/error-codes/api-errors
enum ERROR_CODES {
  INVALID_AUTHENTICATION = 401,
  INCORRECT_API_KEY = 401,
  NOT_A_MEMBER = 401,
  RATE_LIMIT_REACHED = 429,
  EXCEEDED_CURRENT_QUOTA = 429,
  ENGINE_OVERLOADED = 503,
}

const openai = new OpenAi({
  apiKey: config.get("chatGptApiKey"),
});

export const createThread = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const emptyThread = await openai.beta.threads.create();

    res.status(200).json({
      status: "success",
      data: emptyThread,
    });
  } catch (err: any) {
    console.log("err", err);
    next(err);
  }
};

export const getThread = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { thread_id } = req.params;

  try {
    const thread = await openai.beta.threads.retrieve(thread_id);

    res.status(200).json({
      status: "success",
      data: thread,
    });
  } catch (err: any) {
    console.log("err", err);
    next(err);
  }
};

export const updateThread = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user, thread_id } = req.params;

  try {
    const updatedThread = await openai.beta.threads.update(thread_id, {
      metadata: { modified: "true", user },
    });

    res.status(200).json({
      status: "success",
      data: updatedThread,
    });
  } catch (err: any) {
    console.log("err", err);
    next(err);
  }
};

export const deleteThread = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { thread_id } = req.params;

  try {
    const deletedThread = await openai.beta.threads.del(thread_id);

    res.status(200).json({
      status: "success",
      data: deletedThread,
    });
  } catch (err: any) {
    console.log("err", err);
    next(err);
  }
};
