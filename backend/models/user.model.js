import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fname: { type: String, required : true },
  lname: { type : String, required : true },
  password: { type: String, required : true },
  img: { type: String, required : false },
  email: { type: String, required: true, unique: true }
},  { timestamps: true });

export default mongoose.model('User', userSchema);