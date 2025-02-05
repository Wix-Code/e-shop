import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
  title: {
    type: String, required: true
  },
  like: {
    type: Array, required: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true
  }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;