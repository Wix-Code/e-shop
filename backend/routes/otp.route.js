import express from "express"
import { VerifyToken } from "../lib/VerifyToken.js";
import { otpCreate, otpVerify } from "../controllers/otp.controller.js";

const router = express.Router()

router.post("/", VerifyToken, otpCreate)
router.post("/reset", VerifyToken, otpVerify)

export default router;