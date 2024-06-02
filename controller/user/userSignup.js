const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;

    const user = await userModel.findOne({email})

    if(user){
        throw new Error("User Already existed")
    }

    if (!email) {
      throw new Error("Provide Email");
    }
    if (!password) {
      throw new Error("Provide Password");
    }
    if (!name) {
      throw new Error("Provide Name");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    if(!hashPassword){
        throw new Error("Some thing is wrong")
    }


    const payload ={
        ...req.body,
        role:"GENERAL",
        password: hashPassword
    }

    const userData = new userModel(payload);
    const saveUser = await userData.save()


    res.status(201).json({
        data: saveUser,
        success:true,
        error: false,
        message:"User created successfully"
    })

  } catch (error) {
    res.json({
      message:error.message || error,
      error: true,
      success: false,
    });
  }
}


module.exports = userSignUpController