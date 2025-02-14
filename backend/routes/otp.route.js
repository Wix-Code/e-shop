import express from "express"
import { otpCreate, otpVerify } from "../controllers/otp.controller.js";

const router = express.Router()

router.post("/", otpCreate)
router.post("/reset", VerifyToken, otpVerify)

export default router;