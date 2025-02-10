import express from "express"
import { compareProducts, getCompareProducts, resetProduct } from "../controllers/compare.controller.js";

const router = express.Router()

router.post("/", compareProducts)
router.post("/reset", resetProduct)
router.get("/", getCompareProducts)

export default router;