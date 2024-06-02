const productModel = require("../../models/productModel")
const getCategoryproduct = async (req,res)=>{
    try {
        const productCategory = await productModel.distinct("category")

        console.log("Category", productCategory);

        //
        const productByCategory =[]

        for(const category of productCategory){
            const product = await productModel.findOne({category})
            if(product){
                productByCategory.push(product)
            }
        }

        res.json({
            message:"Category product",
            data: productByCategory,
            success:true,
            error:false
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error:true,
            success:false
        })
    }
}

module.exports = getCategoryproduct