import express from "express"
import { deleteAccount, forgotPassword, login, logout, registerUser, resetPassword, updateProfile } from "../controllers/auth.user.controller.js";
import { VerifyToken } from "../lib/VerifyToken.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", login)
router.post("/logout", logout)
router.post("/forgot-password", forgotPassword)
router.post("/reset-password", resetPassword)
router.post("/:id", VerifyToken, updateProfile)
router.delete("/:id", VerifyToken, deleteAccount)

export default router