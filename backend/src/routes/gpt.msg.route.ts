import express from "express";
import {
  createMessage,
  listMessages,
  getMessage,
  updateMessage,
} from "../controllers/gpt.msg.controller";

const router = express.Router();

/**
 * @openapi
 * /api/gpt/msg/threads/:thread_id/messages:
 *  post:
 *     tags:
 *     - Chat GPT
 *     summary: Create a message
 *     description: Create a message
 *     responses:
 *      200:
 *        description: Accepts a list of messages from the user and returns a chat completion object.
 *      401:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post("messages/:thread_id/messages", createMessage);

/**
 * @openapi
 * /api/gpt/msg/threads/:thread_id/messages:
 *   get:
 *     tags:
 *     - Chat GPT
 *     summary: Get a list of messages
 *     description: Get a list of messages
 *     responses:
 *       200:
 *         description: Returns messages based on thread_id
 */
router.get("messages/:thread_id/messages", listMessages);

/**
 * @openapi
 * /api/gpt/msg/threads/:thread_id/messages/:message_id:
 *   get:
 *     tags:
 *     - Chat GPT
 *     summary: Get a message
 *     description: Get a message
 *     responses:
 *       200:
 *         description: Returns a message based on thread_id
 */
router.get("messages/:thread_id/messages/:message_id", getMessage);

/**
 * @openapi
 * /api/gpt/msg/threads/:thread_id/messages/:message_id:
 *  post:
 *     tags:
 *     - Chat GPT
 *     summary: Update a message
 *     description: Update a message
 *     responses:
 *      200:
 *        description: Returns the modified message object.
 *      401:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post("messages/:thread_id/messages/:message_id", updateMessage);

export default router;
