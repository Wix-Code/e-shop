import userModel from "../models/user.model.js";

export const addProductToCart = async (req, res) => {
  const userId = req.user
  const { productId, brand, price, title, description, cat, img } = req.body;
  try {
    
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check if the product exists in the cart
    const cartIndex = user.cart.find((item) => item.productId.toString() === productId);

    if (cartIndex) {
      return res.status(404).json({ success: false, message: "Product already in cart" });
    }

    // Add the product to cart
    user.cart.push({ price, title, description, productId, qty: 1, cat, img, brand });

    await user.save();

    return res.status(200).json({ success: true, message: "Items in cart", user });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to add product to cart" });
  }
}

export const incProductInCart = async (req, res) => {

  const userId = req.user;
  const { productId } = req.body;

  try {
    
    const user = await userModel.findById(userId);

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
    }
    
    // Check if the product exists in the cart
    const cartIndex = user.cart.findIndex((item) => item.productId.toString() === productId);

    if (cartIndex === -1) {
      return res.status(404).json({ success: false, message: "Product not found in cart" });
    }

    // Increment the quantity of the product
    user.cart[cartIndex].qty++;

    await user.save()

    res.status(200).json({success: true, message: "Item increased in cart", user})

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to increment product quantity in cart" });
  }
}

export const decProductInCart = async (req, res) => {
  const userId = req.user;
  const { productId } = req.body;

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
    }
    
    // Check if the product exists in the cart
    const cartIndex = user.cart.findIndex((item) => item.productId.toString() === productId);

    if (cartIndex === + 1) {
      return res.status(404).json({ success: false, message: "Product not found in cart" });
    }

    // Increment the quantity of the product
    user.cart[cartIndex].qty--;

    await user.save()

    res.status(200).json({success: true, message: "Item reduced in cart", user})
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to decrement product quantity in cart"});
  }
}

export const removeFromCart = async (req, res) => {
  const userId = req.user;
  const { productId } = req.body;
  try {
    
    const user = await userModel.findById(userId);
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    
    // Check if the product exists in the cart
    const cartIndex = user.cart.findIndex((item) => item.productId.toString() === productId);

    if (cartIndex === -1) {
      return res.status(404).json({ success: false, message: "Product not found in cart" });
    }

    // Remove the product from cart
    user.cart = user.cart.filter((item) => item.productId.toString() !== productId);
    
    await user.save();

    return res.status(200).json({ success: true, message: "Product removed from cart", user });

  } catch (error) {
    console.log(error);
   
  }
}

export const getAllCart = async (req, res) => {
  const userId = req.user;
  try {
    const user = await userModel.findById(userId);
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
 
    const userCart = user.cart

    res.status(200).json({ success: true, message: "Cart fetched", userCart });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to fetch cart" });
   
  }
}