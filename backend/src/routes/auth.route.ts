import express from "express";
import {
  loginHandler,
  logoutHandler,
  refreshAccessTokenHandler,
  registerHandler,
} from "../controllers/auth.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import { createUserSchema, loginUserSchema } from "../schema/user.schema";

const router = express.Router();

/**
 * @openapi
 *  /api/auth/register:
 *  post:
 *     tags:
 *     - User Api
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - password
 *              - passwordConfirm
 *            properties:
 *              name:
 *                type: string
 *                default: LudwigVon
 *              email:
 *                type: string
 *                default: ludwigvon@ludwigvon.com
 *              password:
 *                type: string
 *                default: password123
 *              passwordConfirm:
 *                type: string
 *                default: password123
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */

router.post("/register", validate(createUserSchema), registerHandler);

/**
 * @openapi
 *  /api/auth/login:
 *  post:
 *     tags:
 *     - User Api
 *     summary: Login a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: ludwigvon@ludwigvon.com
 *              password:
 *                type: string
 *                default: password123
 *     responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post("/login", validate(loginUserSchema), loginHandler);

// Refresh access toke route
router.get("/refresh", refreshAccessTokenHandler);

/**
 * @openapi
 * /api/auth/logout:
 *   get:
 *     tags:
 *     - User Api
 *     description: Logout a user
 *     responses:
 *       200:
 *         description: Returns a success status with message
 *       401:
 *         description: Returns a failure status with failure message
 */
router.get("/logout", deserializeUser, requireUser, logoutHandler);

export default router;
