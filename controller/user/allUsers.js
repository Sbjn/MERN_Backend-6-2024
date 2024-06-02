const userModel = require("../../models/userModel")

async function allUsers (req,res){
    try {
        console.log("userid",req.userId);

        const allUsers = await userModel.find()

        res.json({
            message:"all user",
            data: allUsers,
            error: false
        }
        )
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            success: false,
            error: true,
        })
    }
}

module.exports = allUsers