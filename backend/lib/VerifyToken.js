import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

export const VerifyToken = async (req, res, next) => {
   
  // CHECK IF THE USER HAS A VALID JWT ACCESS TOKEN IN THE COOKIES.
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(400).json({ success: false, message: "Unverified User" });
  }
  
  try {
   
     // IMPLIMENT TOKEN VERIFICATION
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await userModel.findById(decoded.id).select("-password"); // Attach user to req
    if (!req.user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    console.log(req.user, "user")
    next();
  
  } catch (error) {
    console.log(error)
    res.status(400).json({ success: false, message: "Invalid or expired token" });
  }

}