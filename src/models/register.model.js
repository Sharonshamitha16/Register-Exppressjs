const mongoose = require("mongoose")
const {v4} =require("uuid")
const regSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim:true
    },
    _id:{
        type:String,
        default:v4
    },
    userId:{
        type:String,
       default:v4
    },
    Email:{
        required:[true, 'email is required..'],
        type:String,
        unique:true,
        match: [/@(gmail|outlook|ymail)\.com(\.(in|org|net|uk))?$/i, 'Please provide a proper email'],
        trim:true 
    },
    PhoneNum:{
        type:Number,
        required:[true, 'email is required..'],
        unique:true,
        match: /^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$/,
        trim:true   
     },
    dob: {
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
    password:{
        type:String
    },
    created:{
        type:String
    }
},{ timestamps: true });

const register_model = mongoose.model("blog_register",regSchema )
module.exports = register_model 
