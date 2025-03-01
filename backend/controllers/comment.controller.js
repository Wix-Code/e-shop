import Comment from "../models/comment.model.js";
import Product from "../models/product.model.js";

export const comment = async (req, res) => {
  try {
    const userId = req.user;
    const { productId, title } = req.body;
    const comment = new Comment({ title, userId, productId });

    await Product.findByIdAndUpdate(productId, {
      $push: { comment: comment._id }
    });

    await comment.save();
    res.status(201).json({ success: true, comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to create comment" });
  }
}

export const getComment = async (req, res) => {
  try {
    const comment = await Comment.find({ });
    res.status(201).json({ success: true, message: "Comments fetched", comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to fetch comments" });
  }
}