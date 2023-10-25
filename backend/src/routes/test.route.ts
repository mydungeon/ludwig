import express from "express";
import { getTestHandler } from "../controllers/test.controller";

const router = express.Router();

// Test routes
router.get("/test", getTestHandler);

export default router;
