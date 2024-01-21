import express from "express";
import { createCompletions } from "../controllers/gpt.controller";

const router = express.Router();

/**
 * @openapi
 * /api/gpt/completions:
 *  post:
 *     tags:
 *     - Chat GPT
 *     summary: This creates chat gpt completions
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - content
 *            properties:
 *              content:
 *                type: string
 *                default: Tell me how the weather will be tomorrow, in 50 words or less.
 *     responses:
 *      200:
 *        description: Accepts a list of messages from the user and returns a chat completion object.
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post("/completions", createCompletions);

export default router;
