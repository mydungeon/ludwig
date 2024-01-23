import express from "express";
import {
  createThread,
  getThread,
  updateThread,
  deleteThread,
} from "../controllers/gpt.thrd.controller";

const router = express.Router();

/**
 * @openapi
 * /api/gpt/thrd/threads:
 *  post:
 *     tags:
 *     - Chat GPT Threads
 *     summary: Create a thread
 *     description: Create a thread
 *     responses:
 *      200:
 *        description: Returns completion object.
 *      401:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post("threads", createThread);

/**
 * @openapi
 * /api/gpt/thrd/threads/:thread_id:
 *   get:
 *     tags:
 *     - Chat GPT Threads
 *     summary: Get a thread
 *     description: Get a thread
 *     responses:
 *       200:
 *         description: Returns a thread
 */
router.get("threads/:thread_id", getThread);

/**
 * @openapi
 * /api/gpt/thrd/threads/:thread_id:
 *   post:
 *     tags:
 *     - Chat GPT Threads
 *     summary: Update a thread
 *     description: Update a thread
 *     responses:
 *       200:
 *         description: Returns the updated thread
 */
router.post("threads/:thread_id", updateThread);

/**
 * @openapi
 * /api/gpt/thrd/threads/:thread_id:
 *  delete:
 *     tags:
 *     - Chat GPT Threads
 *     summary: Delete a thread
 *     description: Delete a thread
 *     responses:
 *      200:
 *        description: Returns deletion status.
 *      401:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.delete("threads/:thread_id/messages/:message_id", deleteThread);

export default router;
