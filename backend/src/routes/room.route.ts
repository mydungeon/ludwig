import express from "express";
import {
  addUserToRoomBlacklist,
  cancelUserInvite,
  createRoom,
  deleteRoom,
  editRoomName,
  inviteUserToRoom,
  kickUserFromRoom,
  unBanUser,
  userLeaveRoom,
} from "../controllers/room.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { isModerator, isOwner } from "../middleware/verifyRules.js";

const router = express.Router();

router.use(deserializeUser, requireUser);
router.post("/room", createRoom);
router.post("/room/leave", userLeaveRoom);

router.post("/room/delete", isOwner("delete"), deleteRoom);
router.post("/room/name", isOwner("edit-room-name"), editRoomName);

router.put("/room/invite", isModerator("invite-list"), inviteUserToRoom);
router.put(
  "/room/blacklist",
  isModerator("black-list"),
  addUserToRoomBlacklist
);
router.post(
  "/room/cancel-invite",
  isModerator("cancel-invite-list"),
  cancelUserInvite
);
router.post("/room/kick-user", isModerator("kick-user"), kickUserFromRoom);
router.post("/room/unban-user", isModerator("black-list"), unBanUser);

export default router;
