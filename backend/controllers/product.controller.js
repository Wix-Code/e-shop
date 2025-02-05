import Product from "../models/product.model";

export const createProduct = async (req, res) => {
  const { userId, title, description, cat, brand, img, inStock, price } = req.body;

  if (!userId ||!title ||!description ||!cat ||!brand, !img, !inStock, !price) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  try {

    const product = await Product.create({ userId, title, description, cat, brand, img, inStock, price });
    await product.save();
    res.status(400).json({ success: true, message: "Product created successfully", product });
    
  } catch (error) {
    res.status(500).json({ success: false, message: "Product not created successfully" });
    console.log(error);
  }
}

export const getAllProducts = async () => {
  try {
    const product = await Product.find({});
    res.status(200).json({success: true, message: "Products Fetched", product})
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: "Failed to fetch products"})
  }
}

export const getSingleproduct = async () => {
  try {
    
  } catch (error) {
    
  }
}