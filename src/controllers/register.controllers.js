const register = require("../models/register.model")
const bcrypt = require("bcrypt")
const Password_generator = require("../utils/generatePassword")
const sendmail = require("../utils/SendMail")
const reg_controller = async (req, res) => {
    try {
        let { Email, userName } = req.body //// getting only the email, and name from the req.body
        const checkmail = await register.findOne({ Email }) // from model stored imported in varibale reg is used for finding mail
        if (checkmail) {
            return res.status(404).json("Email already exists..!!!")
        }
        let password = Password_generator(8) // up  what's taken it's imported.. that should be used 
        let hashpassword = await bcrypt.hash(password,10) // hash keyword to hash the password and number is given for hashing  x that many times



        const createUser = await register.create({ ...req.body, password: hashpassword })
        await sendmail(Email, userName, password) // up  what's taken it's imported.. that should be used 
        console.log("Mail sent successfully...😊😊✌️🥳");
        
        res.json({
            createUser,
            Message: "User created"
        })
    } catch (error) {
        res.json({ error: error.message })
    }
}

const log_controller = async (req, res) => {
    try {
        const { Email, password } = req.body

        const checkmail = await register.findOne({ Email })
        if (!checkmail) {
            return res.status(409).json({ message: "Invalid Mail...!!!" })
        }


        const checkpassword = await bcrypt.compare(password, checkmail.password ) //mistaken  // need to use the register model which is imported in this variablename
        if(!checkpassword){
            return res.status(409).json({message:"Invalid Password...!!!"})
        }


        res.json({checkmail,
            message: "LOGIN SUCESSFULLY ...!!!😌😌"

        })
    } catch (error) {
        res.json({ error: error.Message })

    }

}

module.exports={
    reg_controller,log_controller
}