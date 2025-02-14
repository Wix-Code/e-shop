import Otp from "../models/otp.model.js";
import otpGenerator from "otp-generator"
import nodemailer from "nodemailer"

export const otpCreate = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  const otpCode = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
  try {
    await Otp.create({ email, otpCode });

        // Send OTP via email (replace with your email sending logic)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER, 
              pass: process.env.EMAIL_PASS, 
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP for verification is: ${otpCode}`
        });

    res.status(200).json({ success: true, message: "OTP sent successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to create OTP" });
  }
}


export const otpVerify = async (req, res) => {
  try {
    const { otpCode } = req.body;

    // Validate input
    if (!otpCode) {
      return res.status(400).json({ success: false, message: "OTP is required" });
    }

    // Find the most recent OTP entry
    const otpRecord = await Otp.findOne().sort({ createdAt: -1 });

    console.log(otpRecord)
    // Check if an OTP exists in the database
    if (!otpRecord) {
      return res.status(400).json({ success: false, message: "No OTP found" });
    }

    // Check if OTP matches
    if (otpRecord.otpCode !== otpCode) {
      return res.status(400).json({ success: false, message: "Incorrect OTP" });
    }

    // Optional: Check OTP expiration (e.g., valid for 5 minutes)
    const otpExpirationTime = 5 * 60 * 1000; // 5 minutes
    if (Date.now() - otpRecord.createdAt.getTime() > otpExpirationTime) {
      return res.status(400).json({ success: false, message: "OTP has expired" });
    }

    // Delete OTP after successful verification
    await Otp.deleteOne({ _id: otpRecord._id });

    res.status(200).json({ success: true, message: "OTP verified successfully" });

  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ success: false, message: "Failed to verify OTP" });
  }
};
