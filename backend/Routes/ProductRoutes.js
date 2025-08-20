const { createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById
} = require('../Controllers/ProductControllers');
const { cloudinaryFileUploader } = require('../Middlewares/FileUplaoder');

const router = require('express').Router();

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.delete('/:id', deleteProductById)
router.put('/:id', cloudinaryFileUploader.single('profileImage'), updateProductById)
router.post('/', cloudinaryFileUploader.single('profileImage'), createProduct);

module.exports = router;