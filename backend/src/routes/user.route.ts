import express from "express";
import {
  getAllUsersHandler,
  getMeHandler,
  updateMeHandler,
} from "../controllers/user.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { restrictTo } from "../middleware/restrictTo";
import { validate } from "../middleware/validate";
import { updateUserSchema } from "../schema/user.schema";

const router = express.Router();

router.use(deserializeUser, requireUser);

// Admin Get Users route
router.get("/", restrictTo("admin"), getAllUsersHandler);

// Get my info route
router.get("/me", getMeHandler);

router.put("/me", validate(updateUserSchema), updateMeHandler);

export default router;
