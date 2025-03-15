import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import mongoose from "mongoose"

export const createProduct = async (req, res) => {
  const { userId, title, description, cat, brand, img, inStock, price } = req.body;

  if (!userId ||!title ||!description ||!cat ||!brand, !img, !inStock, !price) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  try {

    const product = await Product.create({ userId, title, description, cat, brand, img, inStock, price });
   // await product.save();
    res.status(400).json({ success: true, message: "Product created successfully", product });
    
  } catch (error) {
    res.status(500).json({ success: false, message: "Product not created successfully" });
    console.log(error);
  }
}

export const getAllProducts = async (req, res) => {
  const { sort, cat, brand } = req.body;
  try {
    
    const sortOptions = {};
    const filterCategory = {};
    const filterBrand = {};

    if (brand) {
      filterBrand.brand = brand;
    }

    if (cat) {
      filterCategory.cat = cat;
    }

    if (sort === "newest") {
      sortOptions.createdAt = -1;
    }
    if (sort === "oldest") {
      sortOptions.createdAt = 1;
    }
    if (sort === "lowest") {
      sortOptions.price = 1;
    }
    if (sort === "highest") {
      sortOptions.price = -1;
    }

    if (!Object.keys(sortOptions).length) {
      sortOptions.createdAt = -1;
    }

    const product = await Product.find(filterCategory).sort(sortOptions);
    res.status(200).json({success: true, message: "Products Fetched", product})
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: "Failed to fetch products"})
  }
}

export const getSingleproduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).populate("comments").exec();
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "Product fetched", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to fetch product" });
  }
}

export const productReview = async (req, res) => {
  const { id } = req.params;
  const {orderId, rate } = req.body;
  const userId = req.user;

  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    
    const hasPurchased = await Order.findOne({ _id: new mongoose.Types.ObjectId(orderId), status: "paid","products.productId": new mongoose.Types.ObjectId(id) });
  
    if (!hasPurchased) {
      return res.status(403).json({ message: "You can only review products you have purchased." });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    if (!Array.isArray(product.rate)) {
        return res.status(500).json({ success: false, message: "Product rating data is corrupted" });
    }

    // Check if the user has already rated the product
    const hasRated =  product.rate.some((r) => r.userId.toString() === new mongoose.Types.ObjectId(userId).toString());

    if (hasRated) {
      return res.status(409).json({ success: false, message: "You have already rated this product" });
    }
    product.rate.push({ userId, rate: Number(rate) });

    await product.save();
    res.status(200).json({ success: true, message: "Product fetched", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to review product" });
  }
}

export const productComment = async (req, res) => {
  const { id } = req.params;
  const {orderId, comment } = req.body;
  const userId = req.user;

  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    
    const hasPurchased = await Order.findOne({ _id: new mongoose.Types.ObjectId(orderId), status: "paid","products.productId": new mongoose.Types.ObjectId(id) });
  
    if (!hasPurchased) {
      return res.status(403).json({ message: "You can only review products you have purchased." });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    if (!Array.isArray(product.comment)) {
        return res.status(500).json({ success: false, message: "Product rating data is corrupted" });
    }

    // Check if the user has already rated the product
    const hasCommented = product.comment.some((r) => r.userId.toString() === new mongoose.Types.ObjectId(userId).toString());

    if (hasCommented) {
      return res.status(404).json({ success: false, message: "You have already reviewed this product" });
    }
    product.comment.push({ userId: new mongoose.Types.ObjectId(userId), comment });

    await product.save();
    res.status(200).json({ success: true, message: "Product fetched", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to comment about the product" });
  }
}

export const deleteProduct = async (req, res) => { 
  const { id } = req.params;
  const userId = req.user;
  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    const deleteProduct = await Product.findByIdAndDelete(id)
    res.status(200).json({ success: true, message: "Product deleted successfully", deleteProduct });
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to delete product" });
  }
}

export const updateProduct = async (req, res) => { 
  const { id } = req.params;
  const userId = req.user;
  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "Product updated successfully", product });
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Failed to update product" });
  }
}