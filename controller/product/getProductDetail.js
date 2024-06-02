const productModel = require("../../models/productModel")
const getProductDetail = async (req,res)=>{
    try {
        const { productId } = req.body

        const product = await productModel.findById(productId)

        res.json({
            data : product,
            message : "Ok",
            success : true,
            error : false
        })

    } catch (error) {
        res.json({
            message: error.message ||error,
            success:false,
            error:true
        })
    }
}

module.exports = getProductDetail