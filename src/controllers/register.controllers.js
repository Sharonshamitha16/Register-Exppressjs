const register =require("../models/register.model")
const reg_controller = async(req,res)=>{
    try {

       
        let {Email }= req.body
        const checkmail = await register.findOne({Email})
        if(checkmail){
            return res.status(409).json("Email already exists....!!") 
        }
        let createUser = await  register.create(req.body)
        res.json({
            createUser,
            is_active:true,
            message:" userCreated successfully...!!!🥳🥳"
        })
    } catch (error) {

        res.json({
            Error: error.message
          });  
    }
}
module.exports={
    reg_controller
}