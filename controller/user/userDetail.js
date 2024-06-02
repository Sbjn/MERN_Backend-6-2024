const userModel = require("../../models/userModel")
async function userDetailController (req,response){
    try {
        console.log("userId",req.userId);
        const user = await userModel.findById(req.userId)

        response.status(200).json({
            data: user,
            message: "user Detail",
            success: true,
            error: false
        })

    } catch (error) {
        response.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = userDetailController