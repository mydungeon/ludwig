import express from "express";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import {
  addMessage,
  getAllRoomMessages,
  getMessage,
  getRoomMessages,
} from "../controllers/msg.controller";

const router = express.Router();

router.use(deserializeUser, requireUser);
router.get("/msg/", getAllRoomMessages);
router.get("/msg/:roomID", getRoomMessages);
router.get("/msg-update/:roomID", getMessage);
router.post("/msg/:roomID", addMessage);

export default router;
