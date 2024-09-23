const jwt = require("jsonwebtoken")
const register = require("../models/register.model")
 const generate_Token = (userId)=>{
    let token= jwt.sign( {id:userId},process.env.JWT_KEY, {expiresIn:'1h'} )
    return token 
}
module.exports={generate_Token}