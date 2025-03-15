import express from "express"
import { createProduct, getAllProducts, getSingleproduct, productComment, productReview } from "../controllers/product.controller.js";
import { VerifyToken } from "../lib/VerifyToken.js";

const router = express.Router()

router.post("/", createProduct)
router.get("/", getAllProducts)
router.get("/:id", getSingleproduct)
router.post("/:id/like",VerifyToken, productReview)
router.post("/:id/comment",VerifyToken, productComment)

export default router;