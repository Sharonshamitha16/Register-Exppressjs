const Password_generator = (length) => {
    let password = ''
    let characters = `1234567890-=qwertyuiop[]\';lkjhgfdsazxcvbnm,./?><:" |}{+_) (*&^% $#@!'`

for (let index = 0; index < length; index++) {
     password += characters.charAt(Math.floor(Math.random()*characters.length))

}
return password
}
module.exports =  Password_generator