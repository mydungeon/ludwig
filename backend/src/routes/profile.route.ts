import express from "express";
import {
  getMeHandler,
  updateMeHandler,
  updateRatingHandler,
  updateMyRolesHandler,
} from "../controllers/profile.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import {
  updateRatingSchema,
  updateUserSchema,
  updateUserRolesSchema,
} from "../schema/user.schema";

const router = express.Router();

router.use(deserializeUser, requireUser);

/**
 * @openapi
 * /api/profile:
 *   get:
 *     tags:
 *     - Profile Api
 *     description: Get the current logged in user's profile
 *     responses:
 *       200:
 *         description: Returns a success status, user data and a success message
 */
router.get("/", getMeHandler);

/**
 * @openapi
 * '/api/profile':
 *  put:
 *     tags:
 *     - Profile Api
 *     summary: Update the current logged in user's profile
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                default: LudwigVonV2
 *              email:
 *                type: string
 *                default: ludwigvonv2@ludwigvon.com
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
router.put("/", validate(updateUserSchema), updateMeHandler);

/**
 * @openapi
 * '/api/profile/roles':
 *  put:
 *     tags:
 *     - Profile Api
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

/**
 * @openapi
 * '/api/profile/rating':
 *  put:
 *     tags:
 *     - Profile Api
 *     summary: Update the current logged in user's rating
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              rating:
 *                type: number
 *                default: 100
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
router.put("/rating", validate(updateRatingSchema), updateRatingHandler);

export default router;
