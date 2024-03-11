require("dotenv").config();
import path from "path";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import config from "config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
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
import RoomModel from "./models/room.model";

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

const io = new Server(server, {
  pingTimeout: 6000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userID) => {
    socket.join(userID);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log(`user joined new room with id ${room}`);
  });

  socket.on("new message", (receiveData) => {
    const users = receiveData.users;
    const message = receiveData.response;

    if (!users) return console.log("chat.users not defined");
    console.log(users, message);
    users.forEach((user: any) => {
      if (user.userId !== message.senderID) {
        console.log(`i send message to ${user.userId}`);
        socket.broadcast.to(user.userId).emit("new message", { ...message });
      }
    });
  });

  socket.on("send invite", (receiveData) => {
    const inviteData = receiveData.inviteData;
    const roomID = receiveData.inviteData.roomID;
    const roomName = receiveData.roomName;
    if (inviteData.id) {
      socket
        .in(inviteData.id)
        .emit("get invite for user", { _id: roomID, name: roomName });
    }
  });

  socket.on("user kick", (receiveData) => {
    const { RoomID, userID } = receiveData;
    socket.in(userID).emit("user kicked", RoomID);
  });

  socket.on("remove from room invite list", async (receiveData) => {
    const { roomID, userID } = receiveData;
    const foundedRoom = await RoomModel.findOne({ _id: roomID });
    foundedRoom!.users.forEach((user: any) => {
      if (user.userId !== userID) {
        socket
          .to(user.userId)
          .emit("user removed from room invite list", { roomID, userID });
      }
    });
  });

  socket.on("user accept invite", async (receiveData) => {
    const { roomID, userID, userName } = receiveData;
    const foundedRoom = await RoomModel.findOne({ _id: roomID });
    foundedRoom!.users.forEach((user: any) => {
      if (user.userId !== userID) {
        socket
          .to(user.userId)
          .emit("user joined room", { roomID, userID, userName });
      }
    });
  });

  socket.on("admin cancel invite", (receiveData) => {
    const { roomID, userID } = receiveData;
    socket.to(userID).emit("invite canceled by admin", roomID);
  });

  socket.on("ban user", (receiveData) => {
    const { roomID, userID, roomName } = receiveData;
    socket.to(userID).emit("banned by admin", { roomID, roomName });
  });

  socket.on("delete room", async (receiveData) => {
    const { roomName, roomID, roomUsers, myID } = receiveData;
    roomUsers.forEach((user: any) => {
      if (user.userId !== myID) {
        socket.to(user.userId).emit("remove room", { roomID, roomName });
      }
    });
  });

  socket.on("change room name", (receiveData) => {
    const { newRoomName, roomID, roomUsers, myID } = receiveData;
    roomUsers.forEach((user: any) => {
      if (user.userId !== myID) {
        socket
          .to(user.userId)
          .emit("room name changed", { roomID, newRoomName });
      }
    });
  });

  socket.on("user leave the room", (receiveData) => {
    const { roomID, roomUsers, userID } = receiveData;
    roomUsers.forEach((user: any) => {
      if (user.userId !== userID) {
        socket.to(user.userId).emit("user leave the room", { roomID, userID });
      }
    });
  });
});
