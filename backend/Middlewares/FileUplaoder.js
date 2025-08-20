const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const fs = require("fs")

cloudinary.config({
    cloud_name: process.env.CLOUDY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        format: async (req, file) => {
              const ext = file.originalname.split('.').pop();
             return ext;
        }, // supports promises as well
        public_id: (req, file) => file.originalname.split('.')[0] + ""
    },
});

const cloudinaryFileUploader = multer({ storage: storage });

module.exports = {
    cloudinaryFileUploader
}