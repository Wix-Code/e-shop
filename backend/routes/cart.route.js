import express from "express"
import { cart } from "../controllers/cart.controller.js";

const router = express.Router()

router.post("/", cart)

export default router;