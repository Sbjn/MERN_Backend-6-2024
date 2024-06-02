const express = require ("express")
const cors = require ("cors")
const cookieParser = require('cookie-parser')
require ("dotenv").config()
const connectDB = require("./config/db")
const router = require("./routes")


const app = express()
app.use((req, res, next) => {
  const allowedOrigins = [process.env.FRONEND_URL, 'https://sbjn-e-commerce-mern-2024-fi64n3mol-sbjns-projects.vercel.app', 'https://sbjn-e-commerce-mern-2024-fi64n3mol-sbjns-projects.vercel.app/', 'http://localhost:9000'];
  const origin = req.headers.origin;
 
  //res.header('Access-Control-Allow-Origin', process.env.FRONEND_URL);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});
// app.use(cors({
//     origin : process.env.FRONEND_URL,
//     credentials: true
// }))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connect to db");
        console.log("Server is running");
    })
})
