import express from "express"
import { cart, decCart, getAllCart, removeFromCart } from "../controllers/cart.controller.js";

const router = express.Router()

router.post("/", cart)
router.post("/decrease", decCart)
router.post("/remove", removeFromCart)
router.get("/", getAllCart)

export default router;