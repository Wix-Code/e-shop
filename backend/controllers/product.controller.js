import Product from "../models/product.model";

export const createProduct = async (req, res) => {
  const { userId, title, description, cat, brand } = req.body;

  if (!userId ||!title ||!description ||!cat ||!brand) {
    return res.json(400).json({ success: false, message: "All fields are required" });
  }
  try {

    const product = await Product.create({ userId, title, description, cat, brand });
    await product.save();
    res.json({ success: true, message: "Product created successfully", product });
    
  } catch (error) {
    res.json({ success: false, message: "Product not created successfully" });
    console.log(error);
  }
}

export const getAllProducts = async () => {
  try {
    
  } catch (error) {
    
  }
}

export const getSingleproduct = async () => {
  try {
    
  } catch (error) {
    
  }
}