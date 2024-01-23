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

export const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { thread_id } = req.params;

  try {
    const threadMessages = await openai.beta.threads.messages.create(
      thread_id,
      { role: "user", content: "How does AI work? Explain it in simple terms." }
    );
    res.status(200).json({
      status: "success",
      data: threadMessages,
    });
  } catch (err: any) {
    console.log("err", err);
    next(err);
  }
};

export const listMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { thread_id } = req.params;

  try {
    const threadMessages = await openai.beta.threads.messages.list(thread_id);
    res.status(200).json({
      status: "success",
      data: threadMessages,
    });
  } catch (err: any) {
    console.log("err", err);
    next(err);
  }
};

export const getMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { thread_id, message_id } = req.params;

  try {
    const message = await openai.beta.threads.messages.retrieve(
      thread_id,
      message_id
    );

    res.status(200).json({
      status: "success",
      data: message,
    });
  } catch (err: any) {
    console.log("err", err);
    next(err);
  }
};

export const updateMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { thread_id, message_id } = req.params;

  try {
    const message = await openai.beta.threads.messages.update(
      thread_id,
      message_id,
      {
        metadata: {
          modified: "true",
          user: "abc123",
        },
      }
    );

    res.status(200).json({
      status: "success",
      data: message,
    });
  } catch (err: any) {
    console.log("err", err);
    next(err);
  }
};
