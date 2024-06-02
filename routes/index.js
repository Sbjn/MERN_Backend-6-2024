const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/userSignup");
const userSignInController = require("../controller/user/userSignin");
const userDetailController = require("../controller/user/userDetail");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/user/userLogout");
const allUsers = require("../controller/user/allUsers");
const updateUser = require("../controller/user/updateUser");
const UploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryproduct = require("../controller/product/getOneCategoryProduct");
const getCategorywireproduct = require("../controller/product/getCategoryProduct");
const getProductDetail = require("../controller/product/getProductDetail");
const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProduct = require("../controller/user/countAddToCartProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");
const searchProduct = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProduct");

router.post("/signup", userSignUpController);

router.post("/signin", userSignInController);

router.get("/user-detail",authToken, userDetailController)

router.get("/userlogout", userLogout)

//admin panel

router.get("/all-users",authToken,allUsers)

router.post("/update-user",authToken,updateUser)

//Product

router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryproduct",getCategoryproduct)
router.post("/category-product",getCategorywireproduct)
router.post("/product-detail",getProductDetail)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)



//user add to cart

router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)
module.exports = router;
