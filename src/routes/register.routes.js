const express = require("express")
const router = express.Router()
const controller=require("../controllers/register.controllers")
router.post("/register",controller.reg_controller)
router.post("/login",controller.log_controller)
module.exports=router