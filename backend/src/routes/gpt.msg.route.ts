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
 * /api/gpt/messages/threads/:thread_id/messages:
 *  post:
 *     tags:
 *     - Chat GPT Messages
 *     summary: Create a message
 *     description: Create a message
 *     parameters:
 *      - in: path
 *        name: thread_id
 *        schema:
 *          type: string
 *        required: true
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             thread_id:
 *               type: string
 *             messages:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   role:
 *                     type: string
 *                   content:
 *                     type: string
 *     responses:
 *      200:
 *        description: Accepts a list of messages from the user and returns a chat completion object.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  description: The id for the message.
 *                object:
 *                  type: string
 *                  description: thread.message.
 *                created_at:
 *                  type: number
 *                  description: The time of creation.
 *                thread_id:
 *                  type: string
 *                  description: The id of the message thread.
 *                role:
 *                  type: string
 *                  description: The role of the creator of the message.
 *                content:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      type:
 *                        type: string
 *                      text:
 *                        type: object
 *                        properties:
 *                          value:
 *                            type: string
 *                          annotations:
 *                            type: array
 *                file_ids:
 *                  type: array
 *                assistant_id:
 *                  type: string
 *                run_id:
 *                  type: string
 *                metadata:
 *                  type: object
 *      401:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post("threads/:thread_id/messages", createMessage);

/**
 * @openapi
 * /api/gpt/messages/threads/:thread_id/messages:
 *   get:
 *     tags:
 *     - Chat GPT Messages
 *     summary: Get a list of messages
 *     parameters:
 *      - in: path
 *        name: thread_id
 *        schema:
 *          type: string
 *        required: true
 *     description: Get a list of messages
 *     responses:
 *       200:
 *         description: Returns messages based on thread_id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 object:
 *                   type: string
 *                   description: The type of object.
 *                 list:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       object:
 *                         type: string
 *                       created_at:
 *                         type: number
 *                       message_id:
 *                         type: string
 */
router.get("threads/:thread_id/messages", listMessages);

/**
 * @openapi
 * /api/gpt/messages/threads/:thread_id/messages/:message_id:
 *   get:
 *     tags:
 *     - Chat GPT Messages
 *     summary: Get a message
 *     parameters:
 *      - in: path
 *        name: thread_id
 *        schema:
 *          type: string
 *        required: true
 *      - in: path
 *        name: message_id
 *        schema:
 *          type: string
 *        required: true
 *     description: Get a message
 *     responses:
 *       200:
 *         description: Returns a message based on thread_id
 */
router.get("threads/:thread_id/messages/:message_id", getMessage);

/**
 * @openapi
 * /api/gpt/messages/threads/:thread_id/messages/:message_id:
 *  post:
 *     tags:
 *     - Chat GPT Messages
 *     summary: Update a message
 *     parameters:
 *      - in: path
 *        name: thread_id
 *        schema:
 *          type: string
 *        required: true
 *      - in: path
 *        name: message_id
 *        schema:
 *          type: string
 *        required: true
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             modified:
 *               type: boolean
 *             user:
 *               type: string
 *     description: Update a message
 *     responses:
 *      200:
 *        description: Returns the modified message object.
 *      401:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post("threads/:thread_id/messages/:message_id", updateMessage);

export default router;
