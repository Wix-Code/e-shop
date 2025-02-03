import express from "express"
import { createProduct, getAllProducts, getSingleproduct } from "../controllers/product.controller.js";

const router = express.Router()

router.post("/", createProduct)
router.get("/", getAllProducts)
router.post("/:id", getSingleproduct)

export default router;