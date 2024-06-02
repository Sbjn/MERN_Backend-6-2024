const mongoose = require("mongoose")

const proDuctSchema = mongoose.Schema({
    productName: String,
    brandName: String,
    category: String,
    productImage: [],
    description: String,
    price: Number,
    sellingPrice: Number,
}, {
    timestamps:true
})

const productModel = mongoose.model("product",proDuctSchema)

module.exports = productModel