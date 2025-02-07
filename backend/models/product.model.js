import mongoose from "mongoose"

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
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;