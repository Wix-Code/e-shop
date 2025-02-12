import userModel from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import { emailTemplate } from "../lib/Template.js";
//import { emailTemplate } from "../lib/Template.js";

export const registerUser = async (req, res) => {

  const { password, email, ...others } = req.body;

  // CHECK IF USER EXISTS
  const existingUser = await userModel.findOne({ email });
  
  if (existingUser) {
    return res.json(400).json({ success: false, message: "Email already exists" });
  }

  // CHECK IF EMAIL FORMAT IS CORRECT
  if (!validator.isEmail(email)) {
    return res.json(400).json({ success: false, message: "Invalid email format" });
  };

  // CHECK IF PASSWORD IS AT LEAST 8 CHARACTERS LONG
  if (password.length < 8) {
    return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
  }

  // HASH THE PASSWORD FOR SECURITY PURPOSES
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // CREATE AND SAVE NEW USER IN THE DATABASE
  try {
    
    const user = await userModel.create({ ...others, email, password:hashedPassword });

    await user.save()

    res.status(201).json({ success: true, message: "User registered successfully", user });

  } catch (error) {
    console.log(error)

    res.status(500).json({ success: false, message: "Failed to register user", error });

  }
}

export const login = async (req, res) => {

  const {  email } = req.body;
  try {
    const user = await userModel.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    //COMPARE HASHED PASSWORD    
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Incorrect Username or Password" });
    }

    const { password, ...others} = user._doc

    // GENERATE AND SEND JWT TOKEN
    const token = jwt.sign({ id: user._id },process.env.JWT_SECRET_KEY, { expiresIn : "1h"} )
    
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production"? true : false,
      sameSite: process.env.NODE_ENV === "production"? "none" : "lax"
    }).json({ success: true, message: "Logged in successfully", others });
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to login user", error });
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie("accessToken").json({ success : true, message: "Logout successfully"})
  } catch (error) {
    console.log(error)
    res.status(500).json({success: false, message: "Logout failed"})
  }
}

export const forgotPassword = async (req ,res) => {

  const { email } = req.body
 
  const user = await userModel.findOne({ email })

  if (!user) {
    res.status(400).json({ success: false, message: "User not found" });
    return;
  }

  try {
    const secret = process.env.JWT_SECRET_KEY + user.password;

    const token = jwt.sign({id: user._id, email: user.email}, secret, {expiresIn: '1h'});

    const url = `http://localhost:3000/reset-password?id=${user._id}&token=${token}`;


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL_USER,
      subject: 'Password Reset Request',
      html: emailTemplate(url)
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({success: true, message: "Reset Password email sent successfully", mailOptions})

    
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to send reset password email", error });
  }
}

export const resetPassword = async (req, res) => { 
  const { id, token } = req.query;
  const { password } = req.body;
  try {
    const user = await userModel.findById(id);
    
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const secret = (process.env.JWT_SECRET_KEY || "") + user.password;

    try {
      jwt.verify(token, secret); // Verify the token with the same secret used during creation
    } catch (err) {
      res.status(400).json({ success: false, message: "Invalid or expired token" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    await user.save();

    res.status(200).json({ success: true, message: "Password has been reset successfully", user });

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to reset password", error });
  }
}

export const updateProfile = async (req, res) => {

  const user = req.user
  const { password, ...others } = req.body;
  
  //const userId = await userModel.findById({ user });
  if(user !== req.params.id){
   return res.status(400).json({ success: false, message: "Not Authorized"})
  }
  try {

    const updateUser = await userModel.findByIdAndUpdate(req.params.id, {
      $set: others
    }, { new: true, runValidators: true})

    res.status(201).json({ success: true, message: "User profile updated successfully", updateUser})
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to update user profile", error });
  }
}

export const deleteAccount = async (req, res) => {

  const user = req.user;
  
  if(user!== req.params.id){
    res.status(400).json({ success: false, message: "Not Authorized"})
  }

  try {
    
    const deleteUser = await userModel.findByIdAndDelete(user);

    res.clearCookie("accessToken");
    
    res.status(201).json({ success: true, message: "User deleted successfully", deleteUser })
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to delete user account", error });
  }
}