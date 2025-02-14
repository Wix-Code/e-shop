import mongoose from "mongoose"

const otpSchema = new mongoose.Schema({
  email: {
    type: String, required: true
  },
  otpCode: {
    type: String, required: false
  }
}, { timestamps: true });

const Comment = mongoose.model('Otp', otpSchema);

export default Otp;