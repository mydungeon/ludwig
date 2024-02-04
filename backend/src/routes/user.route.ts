import express from "express";
import {
  getAllUsersHandler,
  getMeHandler,
  updateMeHandler,
  updateMyRolesHandler,
  updateRatingHandler,
} from "../controllers/user.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { restrictTo } from "../middleware/restrictTo";
import { validate } from "../middleware/validate";
import {
  updateRatingSchema,
  updateUserRolesSchema,
  updateUserSchema,
} from "../schema/user.schema";

const router = express.Router();

router.use(deserializeUser, requireUser);

/**
 * @openapi
 * /api/users:
 *   get:
 *     tags:
 *     - User Api
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns a success status, users data and a success message
 */
router.get("/", restrictTo("admin"), getAllUsersHandler);

/**
 * @openapi
 * /api/users/me:
 *   get:
 *     tags:
 *     - User Api
 *     description: Get the current logged in user's profile
 *     responses:
 *       200:
 *         description: Returns a success status, user data and a success message
 */
router.get("/me", getMeHandler);

/**
 * @openapi
 * '/api/users/me':
 *  put:
 *     tags:
 *     - User Api
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
router.put("/me", validate(updateUserSchema), updateMeHandler);

/**
 * @openapi
 * '/api/users/me/roles':
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
router.put("/me/roles", validate(updateUserRolesSchema), updateMyRolesHandler);

/**
 * @openapi
 * '/api/users/me/rating':
 *  put:
 *     tags:
 *     - User Api
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
router.put("/me/rating", validate(updateRatingSchema), updateRatingHandler);

export default router;
