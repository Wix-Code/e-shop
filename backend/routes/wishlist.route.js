import express from "express"
import { wishlist } from "../controllers/wishlist.controller.js";

const router = express.Router()

router.post("/", wishlist)

export default router;