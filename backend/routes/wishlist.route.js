import express from "express"
import { deleteProductFromWishlist, getWishlist, wishlist } from "../controllers/wishlist.controller.js";
import { VerifyToken } from "../lib/VerifyToken.js";

const router = express.Router()

router.post("/", VerifyToken, wishlist)
router.post("/delete", VerifyToken, deleteProductFromWishlist)
router.post("/", VerifyToken, getWishlist)

export default router;