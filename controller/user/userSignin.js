const bcrypt = require("bcryptjs");
const userModel = require("../../models/userModel");
const jwt = require("jsonwebtoken");

async function userSignInController(req, response) {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Provide Email");
    }
    if (!password) {
      throw new Error("Provide Password");
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };

      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 8,
      });
      
      const tokenOption ={
        httpOnly: true,
        secure: true
      }
  
      response.cookie("token",token,tokenOption).json({
        message: "Login succsessfully ",
        data: token,
        success: true,
        Error: false,
      });

    } else {
      throw new Error("please check Password");
    }

   

  } catch (error) {
    response.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;
