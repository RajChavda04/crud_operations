const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
   
     name:{
        type: String,
        required:true,
    },
     category:{
        type: String,
        required:true,
        
    },
    price:{
        type: Number,
        required:true,
    
    },
    description:{
        type:String,
        required:true,
    },
     profileImage: {
        type: String
    },
})

const ProductModel = mongoose.model("products", ProductSchema)

module.exports= ProductModel