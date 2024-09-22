const nodemailer = require("nodemailer")
const register = require("../models/register.model")
const mailSend = async (Email, userName, password) => {
    console.log("EMAIL_ID:", process.env.EMAIL_ID);
    console.log("PASS_KEY:", process.env.PASS_KEY);
    console.log('Email:', Email);
    console.log('Username:', userName);
    console.log('Password:', password);

    try {
        const transporter = await nodemailer.createTransport({
            service: "gmail",
            auth: {
                use: "sharonshamitha16@gmail.com",
                pass: process.env.PASS_KEY,
            },
            tls:{
                rejectUnauthorized:false
            }
        })
        let mailcontent = {
            from: "sharonshamitha16@gmail.com",
            to: Email,
            subject: "Account Registration",
            text: `Hello ${userName},\nYour account has been created successfully.\nYour temporary password is: ${password}`

        }
        await transporter.sendMail(mailcontent) // senMail is a method to send mail and passed aruguments got form the variable mailcontent
        console.log("MAIL SENT>>>>😊😊");



    }

    catch (e) {
        console.error("Error sending mail:", e);
    }
}
module.exports = mailSend 