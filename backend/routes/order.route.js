import express from "express"
import { getOrder, order } from "../controllers/order.controller.js";

const router = express.Router()

router.post("/", order)
router.get("/", getOrder)

export default router;