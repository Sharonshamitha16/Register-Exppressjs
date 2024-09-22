const register = require("../models/register.model")
const Password_generator = require("../utils/generatePassword")
const sendmail = require("../utils/SendMail")
const bcrypt = require("bcrypt")

const reg_controller = async (req, res) => {

    try {

        let { Email, userName } = req.body // getting only the email, and name from the req.body
        const checkmail = await register.findOne({ Email }) // from model stored imported in varibale reg is used for finding mail

        if (checkmail) {
            return res.status(409).json("Email already exists...!!!")
        }
        let password = Password_generator(8) // up  what's taken it's imported.. that should be used 
        let hashpassword = await bcrypt.hash(password, 10) // hash keyword to hash the password


        // let data = {
        //     ...req.body,
        //     password: hashpassword,
        //     created: "success",
        // }
        // const createUser = await register.create(data)
         const createUser = await register.create({...req.body,password:hashpassword,created:"success"})
        await sendmail(Email, userName, password) // up  what's taken it's imported.. that should be used 
        console.log("MAIL SENT SUCESSFULLY>>>😊😊✌️🥳");

        res.json({
            createUser,
            // password:hashpassword,         
            Message: "User created..!!"
        })
    }
    catch (e) {
        res.json({ error: e.message })
    }

}

const log_controller = async (req, res) => {
    try {
        let { Email, userName } = req.body
        const checkmail = await register.findOne({ Email })
        if (!checkmail) {
            return res.status(404).json({ message: "Invalid mail...." })
        }
        const checkPassword = await register.bcrypt.compare(checkmail.password)// need to use the register model which is imported in this variablename
        if (!checkPassword) {
            return res.status(404).json({ message: "Invalid Password...." })
        }

        res.json({checkmail,
            message: "LOGIN SUCESSFULLY ...!!!😌😌"
        })
    }catch(e){
        res.json(e.message)
    }
}
module.exports = { reg_controller, log_controller }