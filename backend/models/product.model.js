import mongoose from "mongoose"
import Comment from "./comment.model.js";

const productSchema = new mongoose.Schema({
  title: {
    type: String, required: true
  },
  description: {
    type: String, required: true
  },
  price: {
    type: Number, required: true
  },
  cat: {
    type: String, required: true
  },
  brand: {
    type: String, required: true
  },
  img: {
    type: Array, required: true
  },
  rate: {
    type: Array, required: false
  },
  inStock: {
    type: Boolean, required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
  },
  comment: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      comment: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;