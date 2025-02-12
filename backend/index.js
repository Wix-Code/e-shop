import express from "express"
import cors from "cors"
import { ConnectDb } from "./lib/ConnectDb.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js"
import orderRouter from "./routes/order.route.js"
import productRouter from "./routes/products.route.js"
import commentRouter from "./routes/comment.route.js"
import compareRouter from "./routes/compare.route.js"
import cartRouter from "./routes/cart.route.js"
import wishlistRouter from "./routes/wishlist.route.js"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", async (req,res) => {
  res.send("api is running");
})

app.use("/api/auth", authRouter)
app.use("/api/product", productRouter)
app.use("/api/comment", commentRouter)
app.use("/api/order", orderRouter)
app.use("/api/wishlist", wishlistRouter)
app.use("/api/compare", compareRouter)
app.use("/api/cart", cartRouter)

app.listen(5000, () => {
  console.log("Server is running on port 5000");
  ConnectDb();
})