const mongoose = require("mongoose")
const regSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    Email:{
        required:true,
        type:String,
        unique:true,
        match: /@(gmail|outlook)\.com$/i
            // errorMessage: 'you may only use email addresses from gmail or outlook'
          
    },
    PhoneNum:{
        type:Number,
        required:true,
        unique:true,
        match: /^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$/    },
    created: {
        type: Date, 
        default: Date.now 
    },

    gender:{
        type:String,
        enum:["female","male"]
    },
    Skillset:{
        type: String, 
        enum:["javascript", "reactjs","expressjs","mongodb"]
    },
    is_active: {
		type: Boolean,
		default: true,
	},
},{ timestamps: true });

const register_model = mongoose.model("blog_register",regSchema )
module.exports = register_model 
