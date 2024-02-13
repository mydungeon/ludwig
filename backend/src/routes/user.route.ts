import express from "express";
import { getUserHandler } from "../controllers/user.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { restrictTo } from "../middleware/restrictTo";

const router = express.Router();

router.use(deserializeUser, requireUser);

/**
 * @openapi
 * /api/user/{userId}:
 *   get:
 *     tags:
 *     - User Api
 *     description: Get user
 *     parameters:
 *      - in: path
 *        name: userId
 *        schema:
 *          type: string
 *        required: true
 *     responses:
 *       200:
 *         description: Returns a success status, users data and a success message
 */
router.get("/:userId", restrictTo("admin"), getUserHandler);

export default router;
