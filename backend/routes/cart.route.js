import express from "express"
import { VerifyToken } from "../lib/VerifyToken.js";
import { addProductToCart, decProductInCart, getAllCart, incProductInCart, removeFromCart } from "../controllers/cart.controller.js";

const router = express.Router()

router.post("/", VerifyToken, addProductToCart)
router.post("/increase", VerifyToken, incProductInCart)
router.post("/decrease", VerifyToken, decProductInCart)
router.post("/remove", VerifyToken, removeFromCart)
router.get("/", getAllCart)

export default router;