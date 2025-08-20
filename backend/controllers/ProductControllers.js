const ProductModel = require('../models/Product')

const createProduct = async (req, res) => {
    try {
        const body = req.body;
        const profileImage = req?.file ? req?.file?.path : null;
        console.log(body);
        body.profileImage = profileImage;
        const pro = new ProductModel(body);

        await pro.save();
        res.status(201)
            .json({
                message: 'Product Created',
                success: true
            });
    } catch (err) {
        console.log('Error ', err);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err
        })
    }
}
const getAllProducts = async (req, res) => {
    try {
         const products = await ProductModel.find({});


        res.status(200)
            .json({
                message: 'All Products',
                success: true,
                data:{
                    products:products
                }
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err
        });
    }
};

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const emp = await ProductModel.findById({ _id: id });
        res.status(200)
            .json({
                message: 'Product Details',
                success: true,
                data: emp
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err
        })
    }
}

const deleteProductById = async (req, res) => {
    try {
        const id = req.params.id;
        await ProductModel.deleteOne({ _id: id });
        res.status(200)
            .json({
                message: 'Product Deleted Successfully',
                success: true
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err
        })
    }
}

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;

    // destructure safely with fallback
    const { name, category, price, description } = req.body || {};

    let updateData = {
      name,
      category,
      price,
      description
    };

    // if file uploaded, set profileImage path
    if (req.file) {
      updateData.profileImage = req.file.path;
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product Updated Successfully",
      success: true,
      data: updatedProduct
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById
}