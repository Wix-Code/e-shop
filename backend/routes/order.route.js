import express from "express"
import { getOrder, order } from "../controllers/order.controller.js";
import { VerifyToken } from "../lib/VerifyToken.js";

const router = express.Router()

router.post("/", VerifyToken, order)
router.get("/", getOrder)

export default router;