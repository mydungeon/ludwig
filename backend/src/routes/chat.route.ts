import express from "express";
import { getMessages, sendMessage } from "../controllers/chat.controller";

const router = express.Router();

/**
 * @openapi
 * /api/chat/{conversationId}/messages/{receiver}:
 *   get:
 *     tags:
 *     - Chat
 *     summary: An api for chat;
 *     description: Retrieve messages by conversation id;
 *     parameters:
 *      - in: path
 *        name: conversationId
 *        schema:
 *          type: string
 *        required: true
 *      - in: path
 *        name: receiver
 *        schema:
 *          type: string
 *        required: true
 *     responses:
 *       200:
 *         description: Gets messages for the chat.
 */
router.get("/:conversationId/messages/:receiver", getMessages);

/**
 * @openapi
 * /api/chat/{conversationId}/message/{receiver}:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *     - Chat
 *     summary: An api for chat;
 *     description: This contains the receiver and content of the message;
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - sender
 *              - message
 *            properties:
 *              sender:
 *                type: string
 *                default: 65bfefaebf758e19515f694c
 *              message:
 *                type: string
 *                default: This is a test message from 65bfefaebf758e19515f694c
 *     parameters:
 *      - in: path
 *        name: conversationId
 *        schema:
 *          type: string
 *        required: true
 *      - in: path
 *        name: receiver
 *        schema:
 *          type: string
 *        required: true
 *     responses:
 *       200:
 *         description: Sends the message to the receiver.
 */
router.post("/:conversationId/message/:receiver", sendMessage);

export default router;