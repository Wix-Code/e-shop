import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProductsByCategory, getSingleproduct, productComment, productReview, updateProduct } from "../controllers/product.controller.js";
import { VerifyToken } from "../lib/VerifyToken.js";

const router = express.Router()

router.post("/", createProduct)
router.get("/", getAllProducts)
router.get("/:id", getSingleproduct)
router.get("/:cat", getProductsByCategory)
router.delete("/:id", VerifyToken, deleteProduct)
router.post("/:id", VerifyToken, updateProduct)
router.post("/:id/rate",VerifyToken, productReview)
router.post("/:id/comment",VerifyToken, productComment)

export default router;