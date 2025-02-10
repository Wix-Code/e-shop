import express from "express"
import { deleteProductFromWishlist, wishlist } from "../controllers/wishlist.controller.js";

const router = express.Router()

router.post("/", wishlist)
router.post("/delete", deleteProductFromWishlist)

export default router;