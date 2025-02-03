import jwt from "jsonwebtoken";

export const VerifyToken = async (req, res, next) => {
   
  // CHECK IF THE USER HAS A VALID JWT ACCESS TOKEN IN THE COOKIES.
  const token = req.cookies.accessToken;

  if (!token) {
    res.status(400).json({ success: false, message: "Unverified User" });
  }
  
  try {
   
     // IMPLIMENT TOKEN VERIFICATION
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decode.id;
    next();
  
  } catch (error) {
    console.log(error)
    res.status(400).json({ success: false, message: "Invalid or expired token" });
  }

}