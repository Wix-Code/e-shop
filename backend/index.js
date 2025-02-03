import express from "express"
import cors from "cors"
import { ConnectDb } from "./lib/ConnectDb.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js"
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

app.listen(5000, () => {
  console.log("Server is running on port 5000");
  ConnectDb();
})