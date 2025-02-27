import express from "express"
import { getUserOrders, order, verifyPayment } from "../controllers/order.controller.js";
import { VerifyToken } from "../lib/VerifyToken.js";

const router = express.Router()

router.post("/", VerifyToken, order)
router.post("/verify", VerifyToken, verifyPayment)
router.post("/get", VerifyToken, getUserOrders)

export default router;