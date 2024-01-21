import { NextFunction, Request, Response } from "express";
import OpenAi from "openai";
import config from "config";

const openai = new OpenAi({
  apiKey: config.get("chatGptApiKey"),
});

export const createCompletions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { content } = req.body;

  try {
    // let completion = "";
    const stream = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Introduce yourself as Droog AI.",
        },
        { role: "user", content },
      ],
      model: config.get("chatGptModel"),
      stream: true,
    });

    for await (const chunk of stream) {
      console.log(chunk.choices[0]?.delta?.content || "");
      res.write(chunk.choices[0]?.delta?.content || "");
    }

    res.end();
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "Email already exist",
      });
    }
    next(err);
  }
};
