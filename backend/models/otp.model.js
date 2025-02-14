import mongoose from "mongoose"

const otpSchema = new mongoose.Schema({
  email: {
    type: String, required: true
  },
  otpCode: {
    type: String, required: false
  },
  createdAt: { type: Date, expires: '5m', default: Date.now }
});

const Otp = mongoose.model('Otp', otpSchema);

export default Otp;