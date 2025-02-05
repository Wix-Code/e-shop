import express from "express"
import { createProduct, getAllProducts, getSingleproduct } from "../controllers/product.controller.js";
import { comment, getComment } from "../controllers/comment.controller.js";

const router = express.Router()

router.post("/", comment)
router.get("/", getComment)
router.post("/:id", getSingleproduct)

export default router;