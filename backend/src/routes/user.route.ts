import express from "express";
import {
  getUserHandler,
  updateMyRolesHandler,
} from "../controllers/user.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { restrictTo } from "../middleware/restrictTo";
import { validate } from "../middleware/validate";
import { updateUserRolesSchema } from "../schema/user.schema";

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

/**
 * @openapi
 * '/api/user/roles':
 *  put:
 *     tags:
 *     - User Api
 *     summary: Update the current logged in user's roles
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              roles:
 *                type: array
 *                items:
 *                  type: string
 *                  default: user
 *     responses:
 *      200:
 *        description: Updated
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.put("/roles", validate(updateUserRolesSchema), updateMyRolesHandler);

export default router;
