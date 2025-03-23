import express from "express"
import { deleteProductFromWishlist, getWishlist, pushWishlistFromLocalStorageToDb, wishlist } from "../controllers/wishlist.controller.js";
import { VerifyToken } from "../lib/VerifyToken.js";

const router = express.Router()

router.post("/", VerifyToken, wishlist)
router.post("/delete", VerifyToken, deleteProductFromWishlist)
router.get("/", VerifyToken, getWishlist)
router.post("/push", VerifyToken, pushWishlistFromLocalStorageToDb)

export default router;