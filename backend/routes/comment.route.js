import express from "express"
import { comment, getComment } from "../controllers/comment.controller.js";

const router = express.Router()

router.post("/", comment)
router.get("/", getComment)

export default router;