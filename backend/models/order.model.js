import mongoose from "mongoose"
import Comment from "./comment.model.js";

const orderSchema = new mongoose.Schema({
  fname: {
    type: String, required: true
  },
  lname: {
    type: String, required: true
  },
  state: {
    type: Number, required: true
  },
  city: {
    type: String, required: true
  },
  street: {
    type: String, required: true
  },
  phoneNo: {
    type: String, required: true
  },
  status:{
    type:String,
    enum:['Pending','Dispatched','Out for delivery','Cancelled'],
    default:'Pending'
},
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
  },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      img: { type: Number, required: true },
      comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" }
    }
  ],
  amount: {
    type: Number, required: true
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;