import express from "express"
import { compareProducts, getCompareProducts, resetProduct } from "../controllers/compare.controller.js";
import { VerifyToken } from "../lib/VerifyToken.js";

const router = express.Router()

router.post("/", VerifyToken, compareProducts)
router.post("/reset", VerifyToken, resetProduct)
router.get("/", VerifyToken, getCompareProducts)

export default router;