import userModel from "../models/user.model.js";

export const wishlist = async (req, res) => {
  const userId  = req.user;
  const { productId, img, cat, title, price, description } = req.body

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

export const deleteProductFromWishlist = async (req, res) => { 
  const userId  = req.user;
  const { productId } = req.body;
  
  try {
    const user = await userModel.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the product exists in the wishlist
    const wishIndex = user.wish.findIndex((item) => item.productId.toString() === productId);

    if (wishIndex === -1) {
      return res.status(404).json({ message: "Product not found in wishlist" });
    }

    // Remove the product from wishlist
    user.wish = user.wish.filter((item) => item.productId.toString() !== productId);

    // Save the updated user document
    await user.save();

    return res.status(200).json({ success: true, message: "Product removed from wishlist", wishlist: user.wish });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to delete product from wishlist" });
  }
};

export const getWishlist = async (req, res) => { 
  const userId  = req.user;
  try {
    const user = await userModel.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const wishlist = user.wish
    
    return res.status(200).json({ success: true, message: "Wishlist fetched", wishlist });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to fetch wishlist" });
  }
}

export const pushWishlistFromLocalStorageToDb = async (req, res) => { 
  const userId = req.user;
  const {wish} = req.body
  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const user = await userModel.findByIdAndUpdate(userId);
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    
    const updatedWishlist = [...user.wish]
    cart.forEach((item) => {
      const exists = updatedWishlist.find((existingItem) => existingItem.productId === item.productId);
      if (!exists) {
        updatedWishlist.push(item);
      }
    });

    user.wish = updatedWishlist;

    // Update the user's cart in the database
    await user.save();
    return res.status(200).json({ success: true, message: "Wishlist pushed from local storage to database", wishlist: user.wish });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to push wishlist from local storage to database" });
  }
}