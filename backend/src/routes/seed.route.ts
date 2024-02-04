import express from "express";
import { seedDataHandler } from "../controllers/seed.controller";

const router = express.Router();

/**
 * @openapi
 * /api/seed/users/{seedCount}:
 *   get:
 *     tags:
 *     - Seed Data
 *     description: This executes a bulk operation to write user data
 *     parameters:
 *      - in: path
 *        name: seedCount
 *        schema:
 *          type: number
 *        required: true
 *     responses:
 *       200:
 *         description: Returns a success status code and a success message
 */
router.get("/users/:seedCount", seedDataHandler);

export default router;
