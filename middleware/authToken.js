const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.json({
        message: "User not login",
        succses: false,
        error: true,
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      console.log(err);
      console.log("decoded", decoded);

      if (err) {
        console.log("err auth", err);
      }

      req.userId = decoded?._id;

      next();
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      data: [],
      succses: false,
      error: true,
    });
  }
}

module.exports = authToken;
