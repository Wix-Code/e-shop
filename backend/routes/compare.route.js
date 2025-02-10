import express from "express"
import { compareProducts, resetProduct } from "../controllers/compare.controller.js";

const router = express.Router()

router.post("/", compareProducts)
router.post("/reset", resetProduct)

export default router;