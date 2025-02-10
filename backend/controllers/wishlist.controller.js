import userModel from "../models/user.model.js";

export const wishlist = async (req, res) => {
  const { userId, productId, img, cat, title, price, description } = req.body

  try{

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found", user});
    }

    const addToWish = user.wish.find((item) => item.productId.toString() === productId);
    console.log(addToWish, "addwishlist")
    if (addToWish) {
      return res.status(200).json({ success: true, message: "Item already in wishlist", wish: user.wish })
    }

      user.wish.push({ price, description, cat, qty: 1, title, productId, img })
    
    await user.save();

    return res.status(200).json({success: true, message: "Items in wishlist", user})

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to add product to wishlist" });
  }
}