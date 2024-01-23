import express from "express";
import { getHealth } from "../controllers/health.controller";

const router = express.Router();

/**
 * @openapi
 * /api/health:
 *   get:
 *     tags:
 *     - Health check
 *     summary: Ludwig's heartbeat;
 *     description: The heartbeat for Ludwig &#x1F493;
 *     responses:
 *       200:
 *         description: Returns if Ludwig is alive or not.
 */
router.get("/", getHealth);

export default router;
