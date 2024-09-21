const mongoose = require("mongoose")

const connection = ()=>{
    try{
         mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongoose Connected Successfully🥳🥳...!!!")  
    }
    catch(e){
        console.log(`Connection Error ...😥😥${e.message}`);
        
    }
}

module.exports=connection