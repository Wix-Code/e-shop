import userModel from "../models/user.model.js";

export const compareProducts = async (req, res) => {

    const { userId, productId, price, title, description, img, cat, brand } = req.body;
  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const compare = user.compare.find((item) => item.productId.toString() === productId);
   
    if (compare) {
      return res.status(200).json({ success: true, message: "Product already in user's list", compare: user.compare })
    }

    user.compare.push({ price, description, cat, img, title, productId, brand })
    
    await user.save();
    return res.status(200).json({ success: true, message: "Items in compare list", compare: user.compare })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to add product to compare list" });
  }
}

export const resetProduct = async (req, res) => { 
  const { userId } = req.body;

  try {
    const user = await userModel.findById(userId);
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Reset the compare list
    user.compare = [];

    // Save changes
    await user.save();
    
    return res.status(200).json({ success: true, message: "Compare list reset", compare: user.compare });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to reset compare list" });
  }
};