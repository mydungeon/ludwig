require("dotenv").config();
import path from "path";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import config from "config";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./utils/connectDB";
import authRouter from "./routes/auth.route";
import chatRoute from "./routes/chat.route";
import gptCompletionsRouter from "./routes/gpt.compl.route";
import gptMessagesRouter from "./routes/gpt.msg.route";
import gptThreadsRouter from "./routes/gpt.thrd.route";
import healthRouter from "./routes/health.route";
import userRouter from "./routes/user.route";
import usersRouter from "./routes/users.route";
import profileRouter from "./routes/profile.route";
import seedRouter from "./routes/seed.route";
import swaggerDocs from "./utils/swagger";
import { upgrade } from "./utils/wss";

const app = express();
const port = config.get<number>("port");

// Middleware

// 1. Body Parser
app.use(express.json({ limit: "10kb" }));

// 2. Cookie Parser
app.use(cookieParser());

// 3. Logger
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// 4. Cors
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

// Routes
app.use("/api/auth", authRouter);
app.use("/api/chat", chatRoute);
app.use("/api/gpt/completions", gptCompletionsRouter);
app.use("/api/gpt/threads", gptThreadsRouter);
app.use("/api/gpt/messages", gptMessagesRouter);
app.use("/api/health", healthRouter);
app.use("/api/seed", seedRouter);
app.use("/api/user", userRouter);
app.use("/api/users", usersRouter);
app.use("/api/profile", profileRouter);
app.use("/public", express.static(path.join(__dirname, "public")));
swaggerDocs(app, 3000);

// UnKnown Routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  err.status = err.status || "error";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

const server = app.listen(port, async () => {
  console.log(`Server started on port: ${port}`);
  // 👇 call the connectDB function here
  await connectDB();
});

async function configureWss() {
  const wss = await upgrade(server);
}

configureWss();
