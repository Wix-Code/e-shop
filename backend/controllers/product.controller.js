import Product from "../models/product.model.js";

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