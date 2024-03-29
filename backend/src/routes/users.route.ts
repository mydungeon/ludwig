import express from "express";
import { getAllUsersHandler } from "../controllers/users.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { restrictTo } from "../middleware/restrictTo";

const router = express.Router();

router.use(deserializeUser, requireUser);

/**
 * @openapi
 * /api/users:
 *   get:
 *     tags:
 *     - Users Api
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns a success status, users data and a success message
 */
router.get("/", restrictTo("admin"), getAllUsersHandler);

export default router;
