import mongoose from 'mongoose';

const wishSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  cat: { type: String, required: true },
  qty: { type: Number, default: 1 },
  price: { type: Number, required: true },
  img: { type: String, required: true },
});
const compareSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  cat: { type: String, required: true },
  qty: { type: Number, default: 1 },
  price: { type: Number, required: true },
  img: { type: String, required: true },
});
const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  cat: { type: String, required: true },
  qty: { type: Number, default: 1 },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  brand: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  fname: { type: String, required : true },
  lname: { type : String, required : true },
  password: { type: String, required : true },
  img: { type: String, required : false },
  email: { type: String, required: true, unique: true },
  wish: [wishSchema],
  compare: [compareSchema],
  cart: [cartSchema],
},  { timestamps: true });

export default mongoose.model('User', userSchema);