import express from "express"
import { createProduct, getAllProducts, getSingleproduct, productReview } from "../controllers/product.controller.js";
import { VerifyToken } from "../lib/VerifyToken.js";

const router = express.Router()

router.post("/", createProduct)
router.get("/", getAllProducts)
router.get("/:id", getSingleproduct)
router.post("/:id/review",VerifyToken, productReview)

export default router;