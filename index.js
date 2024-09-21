const express = require("express")
const app = express()
app.use(express.json())
const router =require("./src/routes/register.routes")
const connection = require("./src/config/connection")
require("dotenv").config()
connection()
app.use(router)
const port =8080
app.listen(port,()=>{
    console.log(`server running in the port ${port}`);  
})
app.use("/",()=>{
    console.log(`server is alive ...!!!`);
    
})